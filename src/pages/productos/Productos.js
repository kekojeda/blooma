import "./Productos.sass"

import React from 'react'
import { ProductListContainer } from "../../components/products/ProductListContainer"

const Productos = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center p-5 ms-5 flex-column">
        <h1 className="titulo">Nuestros <span className='fw-bold fst-italic'>productos</span></h1>
        <span className='fw-bold text-decoration-underline titulo'>para vos</span>
      </div>

      <ProductListContainer />


    </div>
  )
}

export default Productos
