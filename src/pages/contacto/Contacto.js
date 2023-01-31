import "./Contacto.sass"
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import React from 'react'

const Contacto = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center px-5 w-75 ms-5 portada">
        <p className="titulo ">Estemos en <span className='fw-bold text-decoration-underline'>contacto</span>.</p>
      </div>
      <div>
        <div className="d-flex justify-content-center align-content-center row">
          <div>
           <FiInstagram size='2.2em'/>
            <p>INSTAGRAM</p>
          </div>
          <div>
            <FaWhatsapp size='2.5em'/>
            <p>WHATSAPP</p>
          </div>
          <div>
            <BsFacebook size='2.5em'/>         
            <p>FACEBOOK</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Contacto