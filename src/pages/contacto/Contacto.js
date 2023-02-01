import "./Contacto.sass"
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import React from 'react'

const Contacto = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center p-5 ms-5">
        <p className="titulo ">Estemos en <span className='fw-bold text-decoration-underline'>contacto</span>.</p>
      </div>
      <div className="bg-light ">
        <div className="mx-5 d-flex flex-column">
          <ul className="justify-content-center d-flex align-content-center">
            <li className="m-4 align-items-center d-flex  column justify-content-center">
              <a href="https://www.instagram.com/blooma.lashnails/" target="_blank" className="p-0 flex-column text-black text-decoration-none d-flex flex-wrap">
                <div className='d-flex justify-content-center m-2'>
                  <FiInstagram size='2.2em'/>
                </div>
              <div>INSTAGRAM</div>
              </a>
            </li>
            <li className="m-4 align-items-center d-flex column justify-content-center">
              <a href="https://wa.me/541123886544?text=Hola!%20Estoy%20interesada,%20me%20pasas%20m%C3%A1s%20info%20por%20favor?" target="_blank" className="p-0 flex-column text-black text-decoration-none align-content-center d-flex flex-wrap">
                <div className='d-flex justify-content-center m-2'> 
                  <FaWhatsapp size='2.5em'/>
                </div>
              <div>WHATSAPP</div>
              </a>
            </li>
            <li className="m-4 align-items-center d-flex  column justify-content-center">
              <a href = "mailto:blooma.beautystudio@gmail.com" target="_blank" className="p-0 flex-column text-black text-decoration-none d-flex flex-wrap">
                <div className='d-flex justify-content-center m-2'>
                    <BsFacebook size='2.5em'/>      
                </div>
                <div>FACEBOOK</div>
              </a>
            </li>
          </ul>
          <div className="border-dark border-top d-flex justify-content-center align-content-center flex-column">
            <h2 className="justify-content-start d-flex align-content-center">¡Acá estamos!</h2>
            <div className="justify-content-start d-flex align-content-center flex-column">
              <p className="justify-content-start d-flex align-content-center">Nos podes encontrar en</p>
              <p className="justify-content-start d-flex align-content-center">Islandia 26 entre Avenida General Hornos y Darwin.</p>
            </div>
            <div className="justify-content-start d-flex align-content-center flex-column">
              <p className="justify-content-start d-flex align-content-center">Martes a viernes  de 14 a 20 hs.</p>
              <p className="justify-content-start d-flex align-content-center">Sábados de 10 a 16 hs.</p>
            </div>
          </div>
          <div className="justify-content-center d-flex align-content-center border border-dark">mapa</div>
          <div>
            <h3 className="fw-bold justify-content-center d-flex align-content-center">¡Te esperamos!</h3>
            <p className="justify-content-center d-flex align-content-center">Blooma</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto