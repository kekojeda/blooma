import "./Contacto.sass"
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import React from 'react'

const Contacto = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center px-5 w-75 ms-5">
        <p className="titulo ">Estemos en <span className='fw-bold text-decoration-underline'>contacto</span>.</p>
      </div>
      <div>
        <div className="d-flex justify-content-center align-content-center row">
          <div className="d-flex justify-content-center align-content-center flex-column">
           <FiInstagram size='2.2em'/>
            <p className="d-flex">INSTAGRAM</p>
          </div>
          <div className="d-flex justify-content-center align-content-center flex-column">
            <FaWhatsapp size='2.5em'/>
            <p className="d-flex">WHATSAPP</p>
          </div>
          <div className="d-flex justify-content-center align-content-center flex-column">
            <BsFacebook size='2.5em'/>         
            <p className="d-flex">FACEBOOK</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Contacto