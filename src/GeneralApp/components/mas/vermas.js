import React from "react";
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/vermas.css";

const Vermas = () => {
  const navigate = useNavigate();

  const handleBackMas = () => {
    navigate('/home');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <header className="navbar">
        <div className="navbar-logo">
          <h2>Innovacion</h2>
        </div>
      </header>

        <div className="justify-center">
          <button onClick={handleBackMas}>Volver al Home</button>
        </div>
    </div>
  );
};

export default Vermas;
