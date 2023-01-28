import "./Home.sass"

import React from 'react'

const Home = () => {
  return (
    <div className="my-5 portada">
      <div className="d-flex justify-content-center mx-5 my-5 h-3">
        <p className="titulo">“El acto <span className='fw-bold fst-italic'>más valiente</span> es pensar por<span className='fw-bold text-decoration-underline'> una misma</span>. Y en voz alta”.</p>
      </div>
      <div className='d-flex justify-content-end'>
        <p>Coco Chanel</p>
      </div>
    </div>
  )
}

export default Home