import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./header.scss";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Header = ({ baseURL, baseImgURL, fetchUrl }) => {
  const [movie, setMovie] = useState([]);

  const displayBackdrop = movie.backdrop_path !== undefined;

  // Limitar la cantidad de texto en la descripción de la portada
  const cutString = (string, n) =>
    string?.length > n ? `${string.substr(0, n - 1)} ...` : string;

  // Selección random para la imagen de portada
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`${baseURL}${fetchUrl}`);
      const movieList = request.data.results;
      const random = Math.floor(Math.random() * movieList.length);

      setMovie(movieList[random]);

      return request;
    };

    fetchData();
  }, []);

  // URL para cargar la imagen de portada
  const backdrop = `${baseImgURL}${movie.backdrop_path}`;

  return (
    <>
      {displayBackdrop && (
        <div
          className="header-bg"
          style={{
            backgroundImage: `url("${backdrop}")`,
          }}
        >
          <Container className="title-container">
            <Row>
              <div className="title-row">
                <Col sm={12} className="pb-4">
                  <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                </Col>

                <Col sm={12} className="header-btns pb-3">
                  <Button>Play</Button>
                  <Button>My list</Button>
                </Col>

                <Col className="overview pb-4" sm={12}>
                  <p>{cutString(movie?.overview, 160)}</p>
                </Col>
              </div>
            </Row>
          </Container>
          <div sm={12}>
            <div className="blend-header"></div>
          </div>
        </div>
      )}
    </>
  );
};
