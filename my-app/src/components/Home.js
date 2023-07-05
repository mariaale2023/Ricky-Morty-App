import React from "react";
import Logo from "../images/tt.png";
import "./Home.css";
import Characters from "./Characters/Characters";
// import { Link } from "react-router-dom";

const Home = () => {
  // const api = "https://rickandmortyapi.com/api/character";
  return (
    <>
      <h1 className="title-page">Wikipedia</h1>
      <a className="logo-box" href="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>
      <div className="list-card"></div>
      <Characters />
    </>
  );
};

export default Home;
