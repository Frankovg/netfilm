import React from "react";
import "./userOff.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Login } from "../Login/Login";

export const UserOff = ({ toLogin, setIsLogged }) => {
  return (
    <div className="home-bg">
      <Container className="h-100">
        <Row className="login-area h-100">
          {toLogin ? (
            // A formulario login/sign up
            <Login setIsLogged={setIsLogged} />
          ) : (
            // Pantalla principal sin usuario logueado
            <div className="wrapper">
              <Col sm={12}>
                <h4>Unlimited movies, TV shows, and more.</h4>
              </Col>
              <Col sm={12}>
                <h5>Watch anywhere. Cancel any time.</h5>
              </Col>
              <Col sm={12}>
                <h6>
                  Ready to watch? Enter your email to create or restar your
                  membership.
                </h6>
              </Col>
              <Col sm={12} className="getStarted-inp">
                <Form.Floating>
                  <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputCustom" className="label">
                    Email address
                  </label>
                </Form.Floating>
                <Button type="button" className="getStarted-btn">
                  <p>Get Started</p>{" "}
                  <img
                    src="/icons/right_arrow.svg"
                    alt="white right arrow"
                    className="white-arrow"
                  />
                </Button>
              </Col>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};
