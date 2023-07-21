import React from "react";
import Logo from "../images/tt.png";
import ImgCharacter1 from "../images/pxfuel_1.jpg";
import ImgCharacter2 from "../images/pxfuel_2.jpg";
import ImgCharacter3 from "../images/pxfuel_5.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

const Home1 = () => {
  const shopifyURL = "http://localhost:3000/";

  return (
    <>
      <h1 className="title-page">Wikipedia</h1>
      <a className="logo-box" href="/">
        <img className="logo" src={Logo} alt="logo" />
      </a>

      <div className="home-grid">
        <div className="home-item">
          <img className="home-img" alt="family" src={ImgCharacter1} />
          <h2 className="home-title">History</h2>
        </div>
        <div className="home-item">
          <Link to={`/characters`}>
            <img className="home-img" alt="chracters" src={ImgCharacter2} />
            <h2 className="home-title">Characters</h2>
          </Link>
        </div>
        <div className="home-item">
          {/* <Link to={`/shop`}>
            <img className="home-img" alt="family" src={ImgCharacter3} />
            <h2 className="home-title">Shop</h2>
          </Link> */}
          <a href={shopifyURL} rel="noopener noreferrer">
            <img className="home-img" alt="family" src={ImgCharacter3} />
            <h2 className="home-title">Shop</h2>
          </a>
        </div>
      </div>
    </>
  );
};
export default Home1;
