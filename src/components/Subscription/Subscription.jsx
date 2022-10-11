import React from "react";
import "./subscription.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Subscription = ({ children, colorPremium }) => {
  return (
    <Container fluid>
      <Row className="subs-box">
        <Col
          xs={6}
          sm={5}
          className="d-flex align-items-center justify-content-end"
        >
          <h5>{children}</h5>
        </Col>

        <Col xs={6} sm={7}>
          <Button
            type="button"
            className={!colorPremium ? "sub-btn" : "colorPremium"}
          >
            Subscribe
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
