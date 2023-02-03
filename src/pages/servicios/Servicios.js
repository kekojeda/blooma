import React from 'react'
import { ServiceListContainer } from '../../components/ServiceListContainer'
import "./Servicios.sass"


const servicios = () => {
  return (

    <div>
      <div className="d-flex justify-content-center align-content-center p-5 ms-5 flex-column">
        <h1 className="titulo">Nuestros <span className='fw-bold fst-italic'>servicios</span></h1>
        <span className='fw-bold text-decoration-underline titulo'>para vos</span>
      </div>
        
        <ServiceListContainer />


    </div>
  )
}

export default servicios