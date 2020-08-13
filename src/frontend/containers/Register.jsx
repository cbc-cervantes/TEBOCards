import React, { Component, createRef } from "react";
import "../assets/styles/containers/Register.scss"
import card from "../assets/static/img/card.png";

export default () => {

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
      <section className="register">
        <img src={card} alt=""/>
        <h1>Crea tu cuenta</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <input id="username" name="username" type="text" autoComplete="off" required />
            <span>Nombre de usuario</span>
          </label>
          <label htmlFor="email">
            <input  onInput={handleInput} id="email" name="email" type="email" autoComplete="off" required />
            <span>Correo electrónico</span>
          </label>
          <label htmlFor="password">
            <input id="password" name="password" type="password" required/>
            <span>Contraseña</span>
          </label>
          <button>
            Crear
          </button>
        </form>
      </section>
    )

}
