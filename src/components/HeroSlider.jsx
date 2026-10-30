import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Vuta picha kutoka kwenye API
  useEffect(() => {
    fetch('/api/images?type=hero')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        console.log("DATA KUTOKA API (HERO):", data);
        setSlides(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("KOSA LA KUPATA PICHA:", err);
        setLoading(false);
      });
  }, []);

  // 2. Badilisha picha kila baada ya sekunde 5
  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Kama bado inapakia
  if (loading) {
    return (
      <div className="hero-slider-wrapper">
        <div className="hero-slider" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--primary-blue)' }}>
          <p style={{ color: 'white' }}>Loading images...</p>
        </div>
        <div className="book-now-container">
          <Link to="/booking" className="btn-primary" style={{ padding: '15px 40px', fontSize: '18px' }}>
            Book Now
          </Link>
        </div>
      </div>
    );
  }

  // Kama hakuna picha kabisa kwenye KV
  if (slides.length === 0) {
    return (
      <div className="hero-slider-wrapper">
        <div className="hero-slider" style={{ backgroundColor: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'white' }}>No hero images uploaded yet.</p>
        </div>
        <div className="book-now-container">
          <Link to="/booking" className="btn-primary" style={{ padding: '15px 40px', fontSize: '18px' }}>
            Book Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-slider-wrapper">
      <div className="hero-slider">
        {slides.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(/r2-images/${image})` }}
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