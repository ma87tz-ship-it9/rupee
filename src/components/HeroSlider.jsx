import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('/api/images?type=hero')
      .then(res => res.json())
      .then(data => setSlides(data));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="hero-slider-wrapper">
      <div className="hero-slider">
        {slides.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(/images/${image})` }}
          ></div>
        ))}
      </div>
      <div className="book-now-container">
        <Link to="/booking" className="btn-primary" style={{ padding: '15px 40px', fontSize: '18px' }}>
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;