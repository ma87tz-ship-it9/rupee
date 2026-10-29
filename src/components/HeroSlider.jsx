import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-slider-wrapper">
      {/* Picha zinazoslide (Bila maandishi) */}
      <div className="hero-slider">
        {slides.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Kitufe cha Book Now Chini ya Picha */}
      <div className="book-now-container">
        <Link to="/booking" className="btn-primary" style={{ padding: '15px 40px', fontSize: '18px' }}>
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;