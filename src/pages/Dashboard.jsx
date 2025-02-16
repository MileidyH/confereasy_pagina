import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link, Outlet } from 'react-router-dom'
import '../styles/Dashboard.css'


const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className='contenedor-principal'></div>
      <h1 className='titulo-dash'>Información</h1>
      <div className='tarjetassalones'>
        <div className="tarjeta">
          <img src="./images/saloneventos.jpg" alt="img" className="tarjeta-img" />
          <div className="tarjeta-body">
            <h2>Salón de Eventos Confereasy</h2>
            <button className="tarjeta-button"><Link to= '/login'>Reserva</Link></button>
          </div>
        </div>
        <div className="tarjeta">
          <img src="./images/auditorio03.jpg" alt="img" className="tarjeta-img" />
          <div className="tarjeta-body">
            <h2>Auditorio Confereasy</h2>
            <button className="tarjeta-button"><Link to= '/login'>Reserva</Link></button>
          </div>
        </div>
      </div>
      <div className="Enlaces">
        <div>
          <button className='button'><Link  to='directiva'>Salas de Junta directiva</Link></button>
          <button className='button'><Link to='entrevista'> Salas de entrevista</Link></button>
          <button className='button'><Link to='capacitacion'> Salas de capacitaciones</Link></button>
          <button className='button'><Link to='brain'> Salas de brainstorming</Link></button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard