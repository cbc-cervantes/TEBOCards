import React, { Component} from "react";
import { Link, useHistory, } from "react-router-dom";

import "../assets/styles/containers/Home.scss";
import card from  "../assets/static/img/card.png";


const  Home = () => {
 const history = useHistory()

  const handleClick = () => {
   history.push("/play")
  }

  return(
    <section className="home">
      <div className="hero">
        <div className="cards">
          <img src={card} alt="card" className="card-left"/>
          <img src={card} alt="card"/>
          <img src={card} alt="card" className="card-right"/>
        </div>
        <button onClick={handleClick}>
          Jugar
        </button>
      </div>

    </section>
  );

}

export default Home;


