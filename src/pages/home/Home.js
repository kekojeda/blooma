import "./Home.sass"

import React from 'react'

const Home = () => {
  return (
    <div className="portada ">
      <div className="d-flex justify-content-center align-content-center h-3">
        <p className="titulo">“El acto <span className='fw-bold fst-italic'>más valiente</span> es pensar por<span className='fw-bold text-decoration-underline'> una misma</span>. Y en voz alta”.</p>
      </div>
      <div className='d-flex justify-content-end px-4'>
        <p className="text-white">Coco Chanel</p>
      </div>
    </div>
  )
}

export default Home