import "./Home.sass"

import React from 'react'

const Home = () => {
  return (
    <>
      <div className="portada py-5 h-100 d-flex justify-content-center align-content-center flex-column">
        <div className="d-flex justify-content-center align-content-center px-5 w-75 ms-5">
          <p className="titulo ">“El acto <span className='fw-bold fst-italic'>más valiente</span> es pensar por <span className='fw-bold text-decoration-underline'>una misma</span>. Y en voz alta”.</p>
        </div>
        <div className='d-flex justify-content-end px-4 coco'>
          <p className="text-white fs-1 ">Coco Chanel</p>
        </div>
        <div>
          <div>
            <h2 className='fw-bold'>Sobre Blooma</h2>
          </div>
          <div className='border-bottom border-black'>            
            <p>Hola! bienvenida a Blooma Beauty Studio.</p>
            <p>Mi nombre es Flor, soy esteticista, cosmetóloga, masoterpeuta, lash trainer y manicura.
              Además de ser emprendedora y tener mi estudio de estética integral, soy mama de dos hijxs hermosxs Benja (9) y Fran (3), compañera de mi marido y ama de casa.</p>
            <p>Hace más de 10 años trabajo en esta profesión tan hermosa que amo tanto y doy gracias por poder trabajar de lo que me gusta.</p>
            <p>Mi estudio integral de estética está orientado a toda mujer que se elija y se quiera dar su tiempo y sentirse mejor con ella misma. En mi estudio no existen mujeres gordas, flacas, bajas o altas, todas somos únicas y mi objetivo es que ustedes logren conseguir su mejor versión.</p>
            <p>Contamos con horarios super flexibles como también precios accesibles para que puedan tener continuidad con cualquiera de nuestros tratamientos y servicios totalmente personalizados.</p>
            <p>Nuestros diagnósticos son gratuitos y siempre sos bienvenida a empezar a elegirte, hacerte tratamientos y servicios pensados <span className='fw-bold text-decoration-underline'>por y para vos</span>.</p>        
          </div>
        </div>
        <div>
          <div>
            <h3>De Blooma para vos</h3>
            <p>Tips diarios</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home