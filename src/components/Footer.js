
import { BsCreditCard } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <>
    <div className="bg-dark">
      <footer className="py-5 px-5">
        <div className="flex-column align-content-center">
          <div className="align-items-center">
            <h5><Link to={'/faqs'} className="nav-link text-white d-flex justify-content-center">PREGUNTAS FRECUENTES</Link></h5>
          </div>
          <div className="align-items-center d-flex justify-content-center my-3" >
            <img src='/images/Rectangulo.svg'/>
          </div>
          <div className="align-items-center d-flex justify-content-center flex-column">
            <h5 className="nav-link  d-flex text-white justify-content-center">MEDIOS DE PAGO</h5>
            <ul className="nav align-items-center justify-content-between w-5">
              <li className="nav-item mb-2 nav-link p-0"><img src='/images/tarjeta.svg'/></li>
              <li className="nav-item mb-2 nav-link p-0"><img src='/images/MePa.svg'/></li>                
              <li className="nav-item mb-2 nav-link p-0"><img src='/images/efectivo.svg'/></li>                
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center py-4 my-4 border-top flex-column">
        <div className="align-items-center justify-content-center flex-column">
            <h5 className=' d-flex text-white justify-content-center'>¡ESTAMOS EN CONTACTO!</h5>
            <ul className="nav justify-content-center d-flex">
              <li className="nav-item mb-2 align-items-center d-flex text-white justify-content-center"><Link href="#" className="nav-link p-0 flex-column text-white"><FiInstagram/><div>INSTAGRAM</div></Link></li>
              <li className="nav-item mb-2 align-items-center d-flex text-white justify-content-center"><Link href="#" className="nav-link p-0 flex-column text-white"><FaWhatsapp/><div>WHATSAPP</div></Link></li>
              <li className="nav-item mb-2 align-items-center d-flex text-white justify-content-center"><Link href="#" className="nav-link p-0 flex-column text-white"><TfiEmail/><div>E-MAIL</div></Link></li>
            </ul>
          </div>
          <p className='text-white'>&copy; 2022 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>  
    </>

  )
}

export default Footer



