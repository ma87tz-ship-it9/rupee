const About = () => {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <h2 style={{ color: 'var(--primary-blue)', marginBottom: '30px', fontSize: '32px' }}>
        About Rupee Plumbing Solution
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'start' }}>
        
        {/* Maelezo ya Kina ya Kampuni */}
        <div>
          <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
            <strong>RUPEE PLUMBING SOLUTION COMPANY LTD</strong> is a leading and trusted supplier of genuine plumbing and sanitary materials based in Dar es Salaam, Tanzania. We are dedicated to providing clean, high-quality, and durable solutions for residential, commercial, and industrial projects. Our company was founded with a clear vision: to eliminate the challenges of counterfeit plumbing products in the market by offering only 100% original materials.
          </p>
          
          <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
            We understand that a proper water and sanitation system is the backbone of any safe and comfortable building. That is why we go the extra mile to source our products from globally recognized and certified manufacturers. Whether you are building a family home, renovating a hotel, setting up a hospital, or constructing a large commercial complex, we have the right materials and expert advice to ensure your project succeeds.
          </p>

          <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
            Our extensive inventory includes a wide variety of PVC and PPR pipes, fittings, elbows, valves, modern sanitary ware, luxury bathroom fixtures, mirrors, and specialized stainless steel sinks (including surgical and commercial kitchen sinks). We are proud to be authorized distributors and partners of world-renowned brands such as <strong>GROHE, ROCA, KOHLER, MILANO, LESSO, ARROW, R.A.K, Castle ware, and DARCERAMICA</strong>.
          </p>

          <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
            Beyond just selling materials, we offer professional technical advice to help our clients choose the right products for their specific needs. Our team is always ready to assist contractors, architects, engineers, and individual homeowners in making informed decisions. We believe in building long-term relationships with our customers based on trust, quality, and exceptional service.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
            Visit our showroom located in the heart of Kariakoo, at Mbaruku/Nyamwezi Street, Gerezani, Dar es Salaam. We welcome everyone to come and experience our wide range of products. <strong>Karibu sana!</strong>
          </p>
        </div>
        
        {/* Kadi ya Taarifa za Ofisi */}
        <div style={{ backgroundColor: 'var(--bg-light)', padding: '40px', borderRadius: '8px', borderLeft: '4px solid var(--secondary-blue)', position: 'sticky', top: '100px' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '25px', fontSize: '22px' }}>Our Company Details</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px' }}>Location:</strong>
            <span style={{ color: '#555' }}>Mbaruku / Nyamwezi Street, Kariakoo, Gerezani, Dar es Salaam.</span>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px' }}>P.O. Box:</strong>
            <span style={{ color: '#555' }}>21196 Dar es Salaam.</span>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px' }}>Phone:</strong>
            <span style={{ color: '#555' }}>+255 621 059 547 | +255 716 018 071</span>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px' }}>Email:</strong>
            <span style={{ color: '#555' }}>albertrupee@gmail.com</span>
          </div>
          
          <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '10px' }}>Our Partners:</strong>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
              GROHE, ROCA, KOHLER, MILANO, LESSO, ARROW, R.A.K, Castle ware, DARCERAMICA.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;