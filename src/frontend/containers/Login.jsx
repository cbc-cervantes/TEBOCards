import React from "react";
import "../assets/styles/containers/Login.scss";
import card from "../assets/static/img/card.png";

export default function () {

  const handleInput = ({ target }) => {
    const valid = target.checkValidity();
    if (!valid && target.value !== ""){
      target.setAttribute("empty", false)
    }else{
      target.setAttribute("empty", true)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    return false;
  }
  return (
    <section className="login">
      <img src={card} alt=""/>
      <h1>Inicia sesión</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input id="email" onInput={handleInput} name="email" type="email" autoComplete="off" required />
          <span>Correo electrónico</span>
        </label>
        <label htmlFor="password">
          <input id="password" name="password" type="password" required/>
          <span>Contraseña</span>
        </label>
        <button>
          Listo
        </button>
      </form>
    </section>
  )
}
