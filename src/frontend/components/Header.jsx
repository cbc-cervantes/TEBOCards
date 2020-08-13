import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import Logo from "../assets/static/img/tebo-cards.png";
import menu from "../assets/static/img/menu.png";
import close from "../assets/static/img/close.png";


function Header(){
  const [popup, setPopup] = useState(false)

  const openPopup = () => setPopup(true)
  const closePopup = () =>  setPopup(false)
  const icon = popup ? close : menu
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt=""/>
      </Link>
      <button onClick={ popup ? closePopup : openPopup} className="hamburger">
        <img src={icon} alt=""/>
      </button>
      <div className={`buttons ${popup && "show"}`}>
        <Link to="/login">
          <button onClick={closePopup} className="btn-1" type="button">
            Iniciar sesión
          </button>
        </Link>
        <Link to="/register">
          <button onClick={closePopup} className="btn-2" type="button">
            Registrarse
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header;
