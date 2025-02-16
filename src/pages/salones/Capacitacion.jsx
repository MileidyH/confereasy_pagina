import React from 'react'
import '../../styles/Capacitacion.css'

const Capacitacion = () => {
  return (
    <div>
    <h1>Salas de Capacitaciones</h1>
    <p>Lugar donde se imparten conocimientos, habilidades y destrezas a un grupo de personas, ya sea para empleados de una empresa, estudiantes de una institución educativa o cualquier otro tipo de público.</p>
    <div className='cap'>
      <div className="tarjeta-cap">
        <div className="titulo">Sala 301</div>
        <div className="cuerpo">
          <img src="/images/salacapacitación301.jpg" alt="Target" />
          <p>Equipados con herramientas tecnológicas como proyectores, pizarras interactivas, y sistemas de audio de alta calidad.</p>
        </div>
      </div>
      <div className="tarjeta-cap">
        <div className="titulo">Sala 302</div>
        <div className="cuerpo">
          <img src="/images/saladecapacitación302.jpg" alt="Target" />
          <p>Crea un ambiente propicio para el intercambio de ideas, la práctica de nuevas habilidades y la generación de conocimientos</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Capacitacion