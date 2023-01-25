import React from 'react'
import { ServiceListContainer } from '../../components/ServiceListContainer'
import "./Servicios.sass"


const servicios = () => {
  return (

    <div>
        <h1>Nuestros <span className='fw-bold fst-italic'>servicios</span>  <span className='fw-bold text-decoration-underline'>para vos</span></h1>
        
        <ServiceListContainer />


    </div>
  )
}

export default servicios