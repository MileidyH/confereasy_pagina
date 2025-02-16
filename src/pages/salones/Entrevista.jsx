import React from 'react'
import '../../styles/Entrevista.css'

const Entrevista = () => {
  return (
<div>
      <h1>Salas de Entrevista</h1>
      <p>Espacio diseñado específicamente para llevar a cabo conversaciones entre periodistas y personas de interés público, como políticos, artistas, deportistas, etc.
      Estas salas ofrecen privacidad, comodidad y un entorno profesional que permite crear una conexión auténtica entre los participantes.
      </p>
      <div className='entrevistas'>
        <div className="tarjeta-entrevista">
          <div className="titulo">Sala 201</div>
          <div className="cuerpo">
            <img src="/images/salaentrevista201.jpg" alt="Target" />
            <p>Iluminación adecuada, aislamiento acústico, y tecnología audiovisual de alta calidad</p>
          </div>
        </div>
        <div className="tarjeta-entrevista">
          <div className="titulo">Sala 202</div>
          <div className="cuerpo">
            <img src="/images/saladeentrevista202.jpg" alt="Target" />
            <p>Garantizan una experiencia óptima tanto para los entrevistados como para las audiencias que consumen el contenido.</p>
          </div>
        </div>
        <div className="tarjeta-entrevista">
          <div className="titulo">Sala 203</div>
          <div className="cuerpo">
            <img src="/images/saladeentrevista203.jpg" alt="Target" />
            <p>Puede adaptarse a diversos formatos de entrevistas, ya sea en vivo, grabadas, o transmitidas en plataformas digitales.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entrevista