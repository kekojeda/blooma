import React from "react";
import { Link } from "react-router-dom";
import './navBar.sass'

const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light p-3 bg-body-tertiary fondo-nav">
      <div className="container-fluid">
        <Link to={'/home'} className="navbar-brand fw-bold" href="#">Blooma</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li>
              <Link to={'/home'} className="text-decoration-none text-black mx-4 active nav" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to={'/servicios'} className="text-decoration-none text-black mx-4 px-2 nav">Servicios</Link>
            </li>            
            <li>
              <Link to={'/productos'} className="text-decoration-none text-black mx-4 px-2 nav">Productos</Link>
            </li>            
            <li>
              <Link to={'/contacto'} className="text-decoration-none text-black mx-4 px-2 nav">Contacto</Link>
            </li>            
            <li>
              <Link to={'/faqs'} className="text-decoration-none text-black mx-4 px-2 nav">FAQS</Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default NavBar
