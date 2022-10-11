import React from "react";
import "./profile.scss";
import avatar from "../../Images/users/3.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Subscription } from "../../components/Subscription/Subscription";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Profile = ({ setIsLogged, setToLogin, user }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();
    setIsLogged(false);
    setToLogin(false);
    navigate("/");
  };

  return (
    <Container>
      <Row className="subs-row">
        <Col md={2} className="avatar-col">
          <img src={avatar} alt="Avatar" />
        </Col>

        <Col md={10}>
          <Row>
            <Col sm={12}>
              <h3>Edit profile</h3>
            </Col>

            <Col sm={12}>
              <h6>{user?.email}</h6>
            </Col>

            <Col sm={12}>
              <h4>Plans</h4>
              <hr />
            </Col>

            <Subscription>Netfilm Standar</Subscription>
            <Subscription>Netfilm Basic</Subscription>
            <Subscription colorPremium="gray">Netfilm Premium</Subscription>

            <Col sm={12}>
              <Button
                type="button"
                className="signOut-btn"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
