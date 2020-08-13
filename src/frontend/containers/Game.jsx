import React from "react";
import "../assets/styles/containers/Game.scss";

export default () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    return false;
  }



  return (
    <section className="game">
      <form action="" onSubmit={handleSubmit}>
        <h1>Unirse a una partida</h1>
        <label htmlFor="room_name">
          <input name="room_name" id="room_name" type="text" required/>
          <span>Nombre de la sala</span>
        </label>
        <button>
          Entrar
        </button>
      </form>
      <hr/>
      <form action="">
        <h1>Crear una sala</h1>
        <label htmlFor="room_name">
          <input name="room_name" id="room_name" type="text" required/>
          <span>Nombre de la sala</span>
        </label>
        <label htmlFor="room_bet">
          <input name="room_bet" id="room_bet" type="text" required/>
          <span>Apuesta</span>
        </label>
        <button>
          Crear
        </button>
      </form>
    </section>
  )
}
