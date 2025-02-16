import React from "react";
import Slider from "react-slick";
import '../styles/Carrusel.css'

const Carrusel = () => {
  const images = [
    { src: "./images/recepcion.jpg", alt: "Imagen 1" },
    { src: "./images/saloneventos.jpg", alt: "Imagen 2" },
    { src: "./images/auditorio03.jpg", alt: "Imagen 3" },
  ];

  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Repite el carrusel indefinidamente
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Muestra una imagen a la vez
    slidesToScroll: 1, // Mueve una imagen a la vez
    autoplay: true, // Autoplay activado
    autoplaySpeed: 3000, // 3 segundos entre cada imagen
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
