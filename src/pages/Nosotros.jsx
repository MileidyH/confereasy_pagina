import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/Nosotros.css'

const Nosotros = () => {
    return (
        <div>
            <Header />
            <div className="container1">
                {/* Sección de Historia */}
                <div className="section">
                    <div className="content">
                        <div className="text">
                        <h2 className="title">Historia</h2>
                            <p>La empresa Confereasy nació de la necesidad de contar con espacios empresariales flexibles que permitieran a compañías de todos los tamaños llevar a cabo reuniones efectivas y capacitaciones de alto impacto.</p>
                            
                            <p> Desde sus inicios, se ha enfocado en crear entornos bien equipados, diseñados para adaptarse a las dinámicas de trabajo modernas y fomentar la creatividad y colaboración en cada evento. Hoy la empresa se enorgullece de haber servido a numerosas empresas y profesionales, manteniendo su compromiso con la calidad, innovación y satisfacción del cliente.</p>
                        </div>
                        <div className="images">
                            <div className="circle-img">
                                <img src="./images/historia1.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="divider" />

                {/* Sección de Visión */}
                <div className="section">
                    <div className="content">
                        <div className="images">
                            <div className="square-img">
                                <img src="./images/vision.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="text">
                            <h2>Visión</h2>
                            <p>Ser el principal referente de espacios empresariales versátiles en la región, ofreciendo entornos adaptables y de calidad que impulsen la innovación, la productividad y el crecimiento de nuestros clientes.</p>
                            <h2>Misión</h2>
                            <p>Brindar a empresas y profesionales espacios funcionales, modernos y cómodos para sus necesidades de capacitación, reuniones ejecutivas, entrevistas y actividades de brainstorming. Nos comprometemos a ofrecer un servicio personalizado, tecnológico y orientado a la excelencia en cada detalle, para garantizar experiencias productivas y exitosas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Nosotros