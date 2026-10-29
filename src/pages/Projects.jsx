const Projects = () => {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      
      {/* Kichwa cha Ukurasa */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '32px' }}>
          Projects We Serve
        </h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          At Rupee Plumbing Solution, we supply high-quality materials and expert advice for a wide range of construction and renovation projects. Our products are trusted by contractors, engineers, and property owners across Tanzania.
        </p>
      </div>
      
      {/* Grid ya Aina za Miradi */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Mradi 1 */}
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Residential Housing</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We supply complete plumbing and sanitary solutions for private homes, apartments, and residential estates. From PVC pipes and fittings to modern bathroom sinks and toilets, we have everything you need for a safe and comfortable home.
          </p>
        </div>

        {/* Mradi 2 */}
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Hotels and Lodges</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            For the hospitality industry, we provide luxury bathroom fixtures, mirrors, bathtubs, and durable plumbing materials. Our products from brands like GROHE and ROCA ensure that your guests enjoy a premium experience during their stay.
          </p>
        </div>

        {/* Mradi 3 */}
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Hospitals and Clinics</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We specialize in providing specialized medical plumbing fixtures, including high-grade Stainless Steel Surgical Sinks and Scrub Sinks. These products are designed to meet strict hygiene and safety standards required in healthcare facilities.
          </p>
        </div>

        {/* Mradi 4 */}
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Commercial Buildings</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We support the construction of office complexes, shopping malls, and other commercial buildings by supplying heavy-duty plumbing pipes, industrial sinks, and reliable water supply systems that can handle high traffic and usage.
          </p>
        </div>

        {/* Mradi 5 */}
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Industrial Facilities</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            Factories and large industrial facilities require robust plumbing solutions. We supply PPR and PVC pipes, specialized valves, and commercial kitchen sinks that are built to withstand harsh environments and heavy operational demands.
          </p>
        </div>

        {/* Mradi 6 */}
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderTop: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>Educational Institutions</h3>
          <p style={{ color: '#444', lineHeight: '1.8' }}>
            We provide durable and cost-effective plumbing solutions for schools, colleges, and universities. Our materials are designed to withstand daily use by large numbers of students while maintaining safety and reliability.
          </p>
        </div>

      </div>

      {/* Maelezo ya Ziada */}
      <div style={{ marginTop: '60px', textAlign: 'center', backgroundColor: 'var(--primary-blue)', padding: '40px', borderRadius: '8px', color: 'white' }}>
        <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>Partner With Us for Your Next Project</h3>
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '16px' }}>
          Whether you are building a single family home or managing a large-scale commercial development, Rupee Plumbing Solution is here to support you with genuine materials and expert guidance. Contact us today to discuss your project requirements.
        </p>
      </div>

    </div>
  );
};

export default Projects;