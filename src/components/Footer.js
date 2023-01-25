import { FaFacebookSquare } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <>
    <div className="container bg-dark">
      <footer className="py-5">
        <div className="row">
          <div className="col-4">
            <h5><Link to={'/faqs'} className="nav-link text-white">PREGUNTAS FRECUENTES</Link></h5>
            <ul className="nav flex-column align-items-center">
              <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted"><FaFacebookSquare/></Link></li>
              <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted"><FiInstagram/></Link></li>                
            </ul>
          </div>
          <div className="col-4">
            <h5 className='text-white'>Contactanos</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-muted"><FaWhatsapp/> +54 9 1123886544</Link></li>
            </ul>
          </div>
          <div className="col-4">
            <h5 className='text-white'>Preguntas frecuentes</h5>            
          </div>
          <div className="col-4">
            <h5 className='text-white'>Te esperamos...</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><MdLocationOn/> Dirección: Islandia 26. Entre Av. Gral Hornos y Darwin</li>
              <li className="nav-item mb-2"><BsClock/> Horarios:</li>
              <li className="nav-item mb-2"><BsClock/> Martes a viernes de 14 a 20 hs</li>
              <li className="nav-item mb-2"><BsClock/> Sábados de 10 a 16 hs</li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><Link className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></Link></li>
            <li className="ms-3"><Link className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></Link></li>
            <li className="ms-3"><Link className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></Link></li>
          </ul>
        </div>
      </footer>
    </div>
    </>

  )
}

export default Footer

