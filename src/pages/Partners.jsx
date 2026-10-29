const Partners = () => {
  // Orodha ya brands kutoka kwenye katalogi yako
  const partnerList = [
    "MILANO", 
    "LESSO", 
    "ARROW", 
    "R.A.K", 
    "Castle ware", 
    "DARCERAMICA", 
    "GROHE", 
    "ROCA", 
    "KOHLER"
  ];

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '32px' }}>
          Our Valued Partners
        </h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          We are proud to be authorized distributors and partners of world-renowned brands. 
          This partnership guarantees that every product we sell is 100% genuine, durable, and meets international quality standards.
        </p>
      </div>
      
      {/* Grid ya Brands */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
        {partnerList.map((brand, index) => (
          <div 
            key={index} 
            className="product-3d-card"
            style={{ 
              backgroundColor: '#fff', 
              padding: '40px 20px', 
              textAlign: 'center', 
              borderRadius: '8px', 
              border: '1px solid #eaeaea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '120px'
            }}
          >
            <h3 style={{ color: 'var(--primary-blue)', fontSize: '22px', fontWeight: '700', letterSpacing: '1px' }}>
              {brand}
            </h3>
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