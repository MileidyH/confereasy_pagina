import React from 'react'
import '../../styles/Brain.css'

const Brain = () => {
  return (
    <div>
    <h1>Salas de Brainstorming</h1>
    <p>Una sala de brainstorming, o también conocida como sala de lluvia de ideas, es un espacio diseñado específicamente para fomentar la creatividad y la generación de ideas innovadoras.  Estos espacios son ideales para equipos de trabajo, grupos de proyectos, o cualquier conjunto de personas que busque desarrollar propuestas innovadoras y explorar nuevas perspectivas.</p>
    <div className='brains'>
      <div className="tarjeta-brains">
        <div className="titulo">Sala 301</div>
        <div className="cuerpo">
          <img src="/images/saladebrainstorming401.jpg" alt="Target" />
          <p>Proporciona un espacio libre de distracciones donde las ideas puedan fluir sin restricciones.</p>
        </div>
      </div>
      <div className="tarjeta-brains">
        <div className="titulo">Sala 302</div>
        <div className="cuerpo">
          <img src="/images/saladebrainstorming402.jpg" alt="Target" />
          <p>Promueve la participación activa de los integrantes del grupo, fortalece el pensamiento colectivo. </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Brain