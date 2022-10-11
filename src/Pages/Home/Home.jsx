import React from "react";
import { UserOff } from "./UserOff";
import { UserOn } from "./UserOn";

export const Home = ({ isLogged, setIsLogged, toLogin }) => {
  return (
    <>
      {isLogged ? (
        <UserOn />
      ) : (
        <UserOff toLogin={toLogin} setIsLogged={setIsLogged} />
      )}
    </>
  );
};
