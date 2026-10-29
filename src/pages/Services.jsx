const Services = () => {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      
      {/* Kichwa cha Ukurasa */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '32px' }}>
          Our Services
        </h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Beyond selling high-quality materials, Rupee Plumbing Solution offers professional services to ensure your project is completed successfully. We are your trusted partner from consultation to installation.
        </p>
      </div>
      
      {/* Grid ya Huduma */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Huduma 1 */}
        <div className="product-3d-card" style={{ padding: '30px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Supply of Materials</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We provide wholesale and retail supply of genuine plumbing and sanitary materials. Whether you are a contractor, an architect, or an individual homeowner, we ensure you get the right quantities and specifications for your project.
          </p>
        </div>

        {/* Huduma 2 */}
        <div className="product-3d-card" style={{ padding: '30px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Installation Advice</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            Our team of experts provides technical guidance on the correct installation of pipes, drainage systems, and bathroom fixtures. We help you avoid common mistakes that lead to leaks, blockages, and costly repairs.
          </p>
        </div>

        {/* Huduma 3 */}
        <div className="product-3d-card" style={{ padding: '30px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Commercial & Hospital Fittings</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We specialize in supplying specialized equipment for hospitals, clinics, hotels, and industrial facilities. This includes surgical scrub sinks, heavy-duty stainless steel sinks, and high-capacity plumbing systems designed for demanding environments.
          </p>
        </div>

        {/* Huduma 4 */}
        <div className="product-3d-card" style={{ padding: '30px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Expert Consultation</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            Not sure which type of pipes or fixtures to use? Our experts are here to help. We offer free consultation to help you choose the right PPR or PVC pipes, fittings, valves, and sanitary ware based on your specific needs and budget.
          </p>
        </div>

        {/* Huduma 5 */}
        <div className="product-3d-card" style={{ padding: '30px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Project Material Estimation</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We assist contractors and developers in estimating the exact quantities of materials required for their projects. This helps you avoid wastage, reduce costs, and ensure that your project stays on schedule.
          </p>
        </div>

        {/* Huduma 6 */}
        <div className="product-3d-card" style={{ padding: '30px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Delivery & Logistics</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We understand that time is money in construction. We offer reliable delivery services within Dar es Salaam and surrounding areas to ensure your materials reach your site quickly and safely.
          </p>
        </div>

      </div>

      {/* Maelezo ya Ziada */}
      <div style={{ marginTop: '60px', textAlign: 'center', backgroundColor: 'var(--primary-blue)', padding: '40px', borderRadius: '8px', color: 'white' }}>
        <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Need Professional Advice for Your Project?</h3>
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '16px', marginBottom: '25px' }}>
          Our team is ready to assist you with expert advice and high-quality materials. Visit our showroom in Kariakoo or contact us today to discuss your plumbing and sanitary needs.
        </p>
        <a href="/contact" className="btn-primary" style={{ padding: '12px 30px', fontSize: '16px' }}>
          Contact Us
        </a>
      </div>

    </div>
  );
};

export default Services;