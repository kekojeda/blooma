import "./Productos.sass"

import React from 'react'
import { ProductListContainer } from "../../components/products/ProductListContainer"

const Productos = () => {
  return (
    <div>
      <h1 className="titulo">Nuestros <span className='fw-bold fst-italic'>productos</span> <span className='fw-bold text-decoration-underline'>para vos</span></h1>

      <ProductListContainer />


    </div>
  )
}

export default Productos
