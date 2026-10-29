const Partners = () => {
  // Orodha ya picha za Wadau (Weka kwenye public/images/partners/)
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

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      
      {/* Kichwa cha Ukurasa */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '32px' }}>
          Our Valued Partners
        </h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          We are proud to be authorized distributors and partners of world-renowned brands. 
          This partnership guarantees that every product we sell is 100% genuine, durable, and meets international quality standards.
        </p>
      </div>
      
      {/* Grid ya Picha za Brands */}
      <div className="grid-3">
        {partnerLogos.map((logo, index) => (
          <div 
            key={index} 
            className="product-3d-card"
            style={{ 
              padding: '20px', 
              height: '150px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <img 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
            />
          </div>
        ))}
      </div>

      {/* Maelezo ya Ziada Chini */}
      <div style={{ marginTop: '60px', textAlign: 'center', backgroundColor: 'var(--bg-light)', padding: '40px', borderRadius: '8px' }}>
        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Why Our Partners Matter</h3>
        <p style={{ color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          By working directly with these global manufacturers, we eliminate the risk of counterfeit products. 
          Whether you need luxury bathroom fixtures, heavy-duty pipes, or specialized industrial sinks, our partners ensure that you receive nothing but the best.
        </p>
      </div>

    </div>
  );
};

export default Partners;