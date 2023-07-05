import React from "react";
import Logo from "../images/tt.png";
import "./Home.css";
// import { Link } from "react-router-dom";

const Home = () => {
  // const api = "https://rickandmortyapi.com/api/character";
  return (
    <>
      <div className="container">
        <a className="logo-box" href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <h1 className="title-page">Wikipedia</h1>
        <div className="list-card"></div>
      </div>
    </>
  );
};

export default Home;
