import React from "react";
import "./navBar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/netfilm_logo.png";
import avatar from "../../Images/users/3.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const NavBar = ({ isLogged, setToLogin, toLogin }) => {
  const [navBarBg, setNavBarBg] = useState(false);

  const navigate = useNavigate();

  // Hacer transparente el navBar al darle scroll
  const transpNavBar = () => {
    if (window.scrollY > 100) {
      setNavBarBg(true);
    } else {
      setNavBarBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transpNavBar);

    return () => window.removeEventListener("scroll", transpNavBar);
  }, []);

  // Determina qué muestra 'home' al clickear sobre el logo
  const handleGoHome = () => {
    if (!isLogged) {
      setToLogin(false);
    }
    navigate("/");
  };

  return (
    <Navbar
      className={`stick ${
        navBarBg || !isLogged ? "transparent" : "app-navbar"
      }`}
    >
      <Container fluid className="nav-container">
        <Navbar.Brand>
          <Button className="logo" onClick={handleGoHome}>
            <img src={logo} alt="NetFilm logo" />
          </Button>
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="p-0">
            {isLogged ? (
              // Muestra avatar de usuario loguado
              <Button
                type="button"
                className="avatar-btn"
                onClick={() => navigate("/profile")}
              >
                <img src={avatar} alt="User avatar" />
              </Button>
            ) : !toLogin ? (
              // Muestra boton de login
              <Button
                type="button"
                className="red-btn"
                onClick={() => setToLogin(true)}
              >
                Sign In
              </Button>
            ) : (
              // Si renderiza formulario de 'login' esta vacio
              <></>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
