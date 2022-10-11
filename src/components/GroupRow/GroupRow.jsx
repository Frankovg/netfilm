import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./groupRow.scss";
import axios from "axios";

export const GroupRow = ({ title, baseURL, baseImgURL, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);

  // Ejecutar por cada vez que cambia la url
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`${baseURL}${fetchUrl}`);
      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="genres">
      <h4>{title}</h4>
      <div className="movie-pictures">
        {movies.map(
          (mov, index) =>
            ((isLarge && mov.poster_path) ||
              (!isLarge && mov.backdrop_path)) && (
              <img
                src={`${baseImgURL}${
                  isLarge ? mov.poster_path : mov?.backdrop_path
                }`}
                alt={mov?.name}
                key={mov.id}
                className={isLarge ? "poster-lg" : "poster"}
              />
            )
        )}
      </div>
    </div>
  );
};
