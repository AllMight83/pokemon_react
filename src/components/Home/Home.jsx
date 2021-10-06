import React from "react";
import logo2 from "../../assets/pokeball2.png";
import pikachu from "../../assets/pikachu.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="home"></div>
        <div className="pkb">
          <img src={logo2} alt="" className="pokeball" />
        </div>
      </div>
      <button className="entrar">
        <Link to="/pokemon">Entrar</Link>
      </button>
      <div className="pikachu">
        <img src={pikachu} alt="" className="pkimage" />
      </div>
    </>
  );
};

export default Home;
