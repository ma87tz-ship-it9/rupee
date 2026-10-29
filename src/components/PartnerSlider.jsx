const PartnerSlider = () => {
  // Orodha ya picha (1.jpg hadi 10.jpg)
  const partnerLogos = [
    '/images/partners/1.jpg',
    '/images/partners/2.jpg',
    '/images/partners/3.jpg',
    '/images/partners/4.jpg',
    '/images/partners/5.jpg',
    '/images/partners/6.jpg',
    '/images/partners/7.jpg',
    '/images/partners/8.jpg',
    '/images/partners/9.jpg',
    '/images/partners/10.jpg',
  ];

  // Tunarudia orodha mara mbili ili iweze kuslide bila kuacha nafasi tupu
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="partner-slider-container">
      <div className="partner-slider-track">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="partner-logo-box">
            <img 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSlider;