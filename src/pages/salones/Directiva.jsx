import React from 'react'
import '../../styles/Directiva.css'

const Directiva = () => {
  return (
    <div>
      <h1>Salas de junta Directiva</h1>
      <p>Las sala de junta directiva es un espacio diseñado específicamente para la realización de reuniones formales entre los miembros de una junta directiva de una empresa u organización. Es un lugar estratégico en cualquier empresa u organización, diseñado para facilitar reuniones clave y decisiones importantes.
      Estas salas suelen contar con características y equipamientos específicos para garantizar un ambiente profesional y cómodo.</p>
      <div className='directivas'>
        <div className="tarjeta-directiva">
          <div className="titulo">Sala 101</div>
          <div className="cuerpo">
            <img src="/images/salajuntadirectiva101.jpg" alt="Target" />
            <p>Mesa central amplia, sillas ergonómicas y acústica adecuada.</p>
          </div>
        </div>
        <div className="tarjeta-directiva">
          <div className="titulo">Sala 102</div>
          <div className="cuerpo">
            <img src="/images/salajuntadirectiva102.jpg" alt="Target" />
            <p>Acústica adecuada, sistema de videoconferencia y acceso restringido.</p>
          </div>
        </div>
        <div className="tarjeta-directiva">
          <div className="titulo">Sala 103</div>
          <div className="cuerpo">
            <img src="/images/salajuntadirectiva103.jpg" alt="Target" />
            <p>Iluminación ajustable, pantallas y proyectores</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Directiva