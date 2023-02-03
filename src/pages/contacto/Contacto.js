import "./Contacto.sass"
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import React from 'react'

const Contacto = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center p-5 ms-5 flex-column">
        <h1 className="titulo">Estemos en</h1>
        <span className='fw-bold text-decoration-underline titulo'>contacto!</span>
      </div>     
      <div className="bg-light ">
        <div className="mx-5 d-flex flex-column">
          <div className="d-flex justify-content-center">
            <ul className="justify-content-around d-flex align-content-center m-0 p-0 flex-wrap">
              <li className="m-4 align-items-center d-flex  column justify-content-center px-5">
                <a href="https://www.instagram.com/blooma.lashnails/" target="_blank" className=" p-0 flex-column text-black text-decoration-none d-flex flex-wrap">
                  <div className='d-flex justify-content-center m-2'>
                    <FiInstagram size='4em' className="contacto"/>
                  </div>
                <div className="contacto">INSTAGRAM</div>
                </a>
              </li>
              <li className="m-4 align-items-center d-flex column justify-content-center px-5">
                <a href="https://wa.me/541123886544?text=Hola!%20Estoy%20interesada,%20me%20pasas%20m%C3%A1s%20info%20por%20favor?" target="_blank" className=" p-0 flex-column text-black text-decoration-none align-content-center d-flex flex-wrap">
                  <div className='d-flex justify-content-center m-2'> 
                    <FaWhatsapp size='4em' className="contacto"/>
                  </div>
                <div  className="contacto">WHATSAPP</div>
                </a>
              </li>
              <li className="m-4 align-items-center d-flex  column justify-content-center px-5">
                <a href = "mailto:blooma.beautystudio@gmail.com" target="_blank" className="  p-0 flex-column text-black text-decoration-none d-flex flex-wrap">
                  <div className='d-flex justify-content-center m-2'>
                      <BsFacebook size='4em' className="contacto"/>      
                  </div>
                  <div className="contacto">FACEBOOK</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="border-dark border-top d-flex justify-content-center align-content-center flex-column pt-5 pb-2">
            <h2 className="justify-content-start d-flex align-content-center fw-bold mb-3">¡Acá estamos!</h2>
            <div className="justify-content-start d-flex align-content-center flex-column mb-3">
              <p className="justify-content-start d-flex align-content-center mb-0">Nos podes encontrar en</p>
              <p className="justify-content-start d-flex align-content-center">Islandia 26 entre Avenida General Hornos y Darwin.</p>
            </div>
            <div className="justify-content-start d-flex align-content-center flex-column mb-3">
              <p className="justify-content-start d-flex align-content-center mb-0">Martes a viernes  de 14 a 20 hs.</p>
              <p className="justify-content-start d-flex align-content-center">Sábados de 10 a 16 hs.</p>
            </div>
          </div>
          <div className="justify-content-center d-flex align-content-center mb-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.739525585919!2d-58.429784199999986!3d-34.711749199999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccdb2bbd55675%3A0x59a14e48dea5c468!2sCAB%2C%20Islandia%2026%2C%20B1821%20Villa%20Fiorito%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1675391302495!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className=" mb-5">
            <h3 className="fw-bold justify-content-center d-flex align-content-center fs-2">¡Te esperamos!</h3>
            <p className="justify-content-center d-flex align-content-center fs-3">Blooma</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto