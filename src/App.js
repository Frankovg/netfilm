import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import { Profile } from "./Pages/Profile/Profile";
import { Home } from "./Pages/Home/Home";
import { NavBar } from "./components/NavBar/Navbar";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import { useState } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [toLogin, setToLogin] = useState(false);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    // Cada vez que cambie el usuario
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uId: userAuth.uid,
            email: userAuth.email,
          })
        );
        setIsLogged(true);
      } else {
        dispatch(logout);
        setIsLogged(false);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app-style">
      <BrowserRouter>
        <NavBar isLogged={isLogged} setToLogin={setToLogin} toLogin={toLogin} />
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                setIsLogged={setIsLogged}
                setToLogin={setToLogin}
                user={user}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                isLogged={isLogged}
                setIsLogged={setIsLogged}
                toLogin={toLogin}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
