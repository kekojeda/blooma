import React from "react";
import { Link } from "react-router-dom";
import './navBar.sass'

const NavBar = () => {
  return (

    <header>
      <nav className="navbar navbar-expand-lg navbar-light p-3">
        <div className="container-fluid">
          <Link to={'/home'} className="navbar-brand fw-bold text-white">Blooma</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={'/home'} className="text-decoration-none  text-white mx-4 px-2 active nav" aria-current="page">Home</Link>
              <Link to={'/servicios'} className="text-decoration-none text-white mx-4 px-2 nav">Servicios</Link>
              <Link to={'/productos'} className="text-decoration-none text-white mx-4 px-2 nav">Productos</Link>
              <Link to={'/contacto'} className="text-decoration-none text-white mx-4 px-2 nav">Contacto</Link>
              <Link to={'/faqs'} className="text-decoration-none  text-white mx-4 px-2 nav">FAQS</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
