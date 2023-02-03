import { TfiEmail } from 'react-icons/tfi';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.sass"

const Footer = () => {
  return (
    
    <>
    <div className="bg">
      <footer className="py-5 px-5 d-flex flex-column justify-content-center align-items-center">
        <div className="flex-column align-content-center">
          <div className="align-items-center justify-content-center">
            <h5 className="ftr-contacto "><Link to={'/faqs'} className="nav-link d-flex justify-content-center ftr-contacto">PREGUNTAS FRECUENTES</Link></h5>
          </div>
          <div className="align-items-center d-flex justify-content-center my-3" >
            <img alt='' src='/img/Rectangulo.svg'/>
          </div>
          <div className="align-items-center d-flex justify-content-center flex-column ftr">
            <h5 className="nav-link  d-flex text-white justify-content-center">MEDIOS DE PAGO</h5>
            <ul className="nav align-items-center justify-content-between ftr">
              <li className="nav-item mx-3 my-2 d-flex justify-content-center"><img alt='' className='mediosDePago' src='blooma/assets/images/pay_method/tarjeta.svg'/></li>
              <li className="nav-item mx-3 my-2 d-flex justify-content-center"><img alt='' className='mediosDePago' src='blooma/assets/images/pay_method/MePa.svg'/></li>                
              <li className="nav-item mx-3 my-2 d-flex justify-content-center"><img alt='' className='mediosDePago' src='blooma/assets/images/pay_method/efectivo.svg'/></li>                
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-4 mt-4 border-top flex-column ftr">
        <div className="align-items-center justify-content-center flex-column ftr">
            <h5 className=' d-flex text-white justify-content-center'>¡ESTAMOS EN CONTACTO!</h5>
            <ul className="justify-content-center d-flex align-content-center me-5 ftr">
              <li className="m-4 align-items-center d-flex text-white column justify-content-center redes">
                <a href="https://www.instagram.com/blooma.lashnails/" target="_blank" rel="noreferrer" className="px-1 flex-column text-white text-decoration-none d-flex flex-wrap">
                  <div className='d-flex justify-content-center m-2'>
                    <FiInstagram size='2.2em' />
                  </div>
                <div >INSTAGRAM</div>
                </a>
              </li>
              <li className="m-4 align-items-center d-flex text-white column justify-content-center redes">
                <a href="https://wa.me/541123886544?text=Hola!%20Estoy%20interesada,%20me%20pasas%20m%C3%A1s%20info%20por%20favor?" rel="noreferrer" target="_blank" className="px-1 flex-column text-white text-decoration-none align-content-center d-flex flex-wrap">
                  <div className='d-flex justify-content-center m-2'> 
                    <FaWhatsapp size='2.5em' />
                  </div>
                <div >WHATSAPP</div>
                </a>
              </li>
              <li className="m-4 align-items-center d-flex text-white column justify-content-center redes">
                <a href = "mailto:blooma.beautystudio@gmail.com" target="_blank" rel="noreferrer" className="px-4 flex-column text-white text-decoration-none d-flex flex-wrap">
                  <div className='d-flex justify-content-center m-2'>
                    <TfiEmail size='2.2em' />
                  </div>
                <div >E-MAIL</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>  
    </>

  )
}

export default Footer



