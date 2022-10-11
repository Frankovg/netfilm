import React from "react";
import "./login.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //   Iniciar sesión con Firebase
  const handleSubmit = (e) => {
    e.preventDefault();

    // Promesa para enviar la info a Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setIsLogged(true);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  //   Crear usuario con Firebase
  const handleRegister = (e) => {
    e.preventDefault();

    // Promesa para enviar la info a Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="signUp-root">
      <h5 className="sign-title">Sign In</h5>
      <Form>
        <FloatingLabel
          controlId="floatingInput"
          label="Email or phone number"
          className="mb-3"
        >
          <Form.Control
            id="floatingInputCustom2"
            type="email"
            placeholder="name@example.com"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            id="floatingInputCustom2"
            type="password"
            placeholder="Password"
            value={password}
            name="pass"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>

        <Button type="submit" className="signIn-btn" onClick={handleSubmit}>
          Sign In
        </Button>

        <Form.Check type="checkbox" id="checkobox-new">
          <Form.Check.Input type="checkbox" />
          <Form.Check.Label>Remember me</Form.Check.Label>
        </Form.Check>

        <section className="signUp-container">
          <h5>New to Netfilm?</h5>
          <Button className="signUp-button" onClick={handleRegister}>
            Sign Up now.
          </Button>
        </section>
      </Form>
    </div>
  );
};
