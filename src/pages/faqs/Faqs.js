import { MdDone } from 'react-icons/md';
import React from 'react'

const Faqs = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center p-5 ms-5 flex-column my-5">
        <h1 className="titulo ">¿Tenés <span className='fw-bold fst-italic'>preguntas</span>?</h1>
        <h2 className="titulo ">¡Te <span className='fw-bold text-decoration-underline'>respondemos!</span></h2> 
      </div>
      <div className="bg-light px-5 py-3">
        <div className="m-5 d-flex flex-column">
          <h3 className='fw-bold mb-4'>¿Qué medios de pago aceptan?</h3>
          <p>Aceptamos efectivo, transferencia bancaria, mercado pago,tarjetas de débito y de crédito.</p>
          <p>Los pagos realizados con tarjetas sufrirán un recargo del 10%.</p>
        </div>
        <div className="m-5 d-flex flex-column">
          <h3 className='fw-bold mb-4'>¿En qué horarios puedo visitar Blooma?</h3>
          <p>Nos podes encontrar en Islandia 26 entre Avenida General Hornos y Darwin.</p>
          <p>Martes a viernes de 14 a 20 hs.</p>
          <p>Sábados de 10 a 16 hs.</p>
        </div>
        <div className="m-5 d-flex flex-column">
          <h3 className='fw-bold mb-4'>¿Cómo puedo consultar por productos/servicios?</h3>
          <p>En la sección de contacto podés encontrar nuestros canales de comunicación (whatsapp, mail, y redes sociales).</p>
        </div>
        <div className="m-5 d-flex flex-column">
          <h3 className='fw-bold mb-4'>¿Qué beneficios me brinda la depilación definitiva?</h3>
          <ul className='p-0'>
            <li className='list-unstyled'><MdDone/> Aclara manchas causadas por la rasuradora, cera o crema depilatoria.</li>
            <li className='list-unstyled'><MdDone/> Elimina los pelitos encarnados (foliculitis). </li>
            <li className='list-unstyled'><MdDone/> Mejora la salud de tu piel y la deja mucho más suave. </li>
            <li className='list-unstyled'><MdDone/> Te ahorras dinero ya que se realiza una vez al mes y solo se necesitan 10 sesiones aproximadamente. </li>
            <li className='list-unstyled'><MdDone/> Optimiza tu tiempo ya que desde la primera sesión empezamos a eliminar vellos.</li>
            <li className='list-unstyled'><MdDone/> No vas a tener más irritaciones causadas por el uso frecuente de cera, crema depilatoria o rasuradora.</li>
          </ul>
        </div>
        <div className="m-5 d-flex flex-column">
          <h3 className='fw-bold mb-4'>¿Cualquier persona puede realizar tratamientos corporales?</h3>
          <p>Sí. En la primera sesión se realiza un diagnóstico con la concepción de una ficha técnica y médica en donde se evalúa qué tipo de tratamiento se ajusta a cada persona. Se plantean objetivos en base a los resultados que el paciente desee obtener, a corto, a mediano y a largo plazo.</p>
        </div>
      </div>
    </div>
  )
}

export default Faqs