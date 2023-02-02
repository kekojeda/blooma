import "./Home.sass"
import Card from 'react-bootstrap/Card'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className="py-5 h-100 d-flex justify-content-center align-content-center flex-column">
        <div className="d-flex justify-content-center align-content-center px-5 ms-5">
          <p className="titulo ">“El acto <span className='fw-bold fst-italic'>más valiente</span> es pensar por <span className='fw-bold text-decoration-underline'>una misma</span>. Y en voz alta”.</p>
        </div>
        <div className='d-flex justify-content-end px-4 coco'>
          <p className="text-white fs-1 ">Coco Chanel</p>
        </div>
        <div className="d-flex m-5 flex-column">
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
          <div className="d-flex m-5 flex-column">
            <h3>De <span className='fw-bold'>Blooma </span><span className='fw-bold text-decoration-underline'>para vos</span></h3>
            <p>Tips diarios</p>
          </div>
          <div className="d-flex row flex-wrap m-5 justify-content-evenly">
            <Card style={{ width: '15rem', background: 'none' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Protegete del sol</Card.Title>
                <Card.Text>
                Una de las formas más importantes para cuidar la piel es protegerla del sol es con un protector solar mayor a un factor 50, aplicarlo 15 minutos antes de exponerse al mismo y repetir la aplicación cada 2 horas.
                Tener en cuenta siempre usar protectores faciales para el rostro y corporales para el cuerpo.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem', background: 'none' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>No fumes</Card.Title>
                <Card.Text>
                  Fumar le da a tu piel un aspecto avejentado y contribuye a la formación de arrugas, como así la opaca y con el tiempo cambia su color a un tono grisáceo.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem', background: 'none' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Trata a tu piel con suavidad</Card.Title>
                <Card.Text>
                  Tu piel es tu lienzo, cuidala usando los productos indicados por tu esteticista y cosmetóloga.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem', background: 'none' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Lleva una dieta saludable</Card.Title>
                <Card.Text>
                  Es una forma gratis y sencilla de cuidar tu piel y tu salud.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home