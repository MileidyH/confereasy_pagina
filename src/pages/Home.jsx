import React from 'react'
import '../styles/Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carrusel from '../components/Carrusel'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <Carrusel />
      </section>
      <section className='titulo-home'>
        <h1>Servicios Confereasy</h1>
      </section>

      <section className='tarjetas-home'>
        <div className="tarjeta">
          <img src="./images/salajuntadirectiva101.jpg" alt="img" className="tarjeta-img" />
          <div className="tarjeta-body">
            <h2>Salas de Junta directiva</h2>
            {/*<button className="tarjeta-button">Más información</button>*/}
            <button className="tarjeta-button"><Link  to='/salas'>Información</Link></button>
          </div>
        </div>
        <div className="tarjeta">
          <img src="./images/saladeentrevista202.jpg" alt="img" className="tarjeta-img" />
          <div className="tarjeta-body">
            <h2>Salas de Entrevista</h2>
            <button className="tarjeta-button"><Link  to='/salas'>Información</Link></button>
          </div>
        </div>
        <div className="tarjeta">
          <img src="./images/salacapacitación301.jpg" alt="img" className="tarjeta-img" />
          <div className="tarjeta-body">
            <h2>Salas de Capacitación</h2>
            <button className="tarjeta-button"><Link  to='/salas'>Información</Link></button>
          </div>
        </div>
        <div className="tarjeta">
          <img src="./images/saladebrainstorming402.jpg" alt="img" className="tarjeta-img" />
          <div className="tarjeta-body">
            <h2>Salas de Brainstorming</h2>
            <button className="tarjeta-button"><Link  to='/salas'>Información</Link></button>
          </div>
        </div>
      </section>
      <section className='contacto'>
        <div>
          <img src="public/images/whatsapp.png" alt="whatsapp" />
          <p>+ 57 321 895 6321</p>
        </div>
        <div>
          <img src="public/images/email.png" alt="email" />
          <p>confereasy@gmail.com </p>
        </div>
        <div>
          <img src="public/images/telefono.png" alt="telefono" />
          <p>604 444 4165</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home