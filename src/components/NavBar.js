import React from "react";
import { Link } from "react-router-dom";
import './navBar.sass'

const NavBar = () => {
  return (

    <header>
      <nav class="navbar navbar-expand-lg navbar-light p-3">
        <div class="container-fluid">
          <Link to={'/home'} className="navbar-brand fw-bold text-white">Blooma</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
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
