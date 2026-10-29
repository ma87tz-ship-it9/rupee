const PlumbingTips = () => {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '32px' }}>
          Plumbing Tips & Education
        </h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Understanding the basics of plumbing can save you time, money, and prevent costly repairs. Here are some professional insights from Rupee Plumbing Solution to help you make the right choices for your home or commercial project.
        </p>
      </div>
      
      {/* Tip 1 */}
      <div style={{ marginBottom: '30px', padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--secondary-blue)' }}>
        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>
          Understanding Home Plumbing Systems
        </h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
          Before starting any construction or renovation, it is crucial to understand the two main plumbing systems in a building. The first is the <strong>Water Supply System</strong>, which brings clean water into your home. The second is the <strong>Drainage System</strong>, which safely removes wastewater. Using the correct pipes for each system is essential to prevent leaks, blockages, and contamination.
        </p>
      </div>

      {/* Tip 2 */}
      <div style={{ marginBottom: '30px', padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--secondary-blue)' }}>
        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>
          Choosing the Right Pipes: PPR vs. PVC
        </h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
          Selecting the right material is key to a durable plumbing system. <strong>PPR Pipes (often green)</strong> are designed for hot and cold water supply because they can withstand high temperatures and pressure. On the other hand, <strong>PVC Pipes (white or grey)</strong> are primarily used for drainage and waste systems. Always consult with our experts at Rupee Plumbing before purchasing to ensure you get the exact specifications needed for your project.
        </p>
      </div>

      {/* Tip 3 */}
      <div style={{ marginBottom: '30px', padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--secondary-blue)' }}>
        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>
          Proper Installation of Sanitary Ware
        </h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
          When installing sinks, toilets, or bathtubs, proper sealing is critical. Ensure that the area where the tub meets the wall is well-sealed with silicone to prevent water damage. Additionally, always install isolation valves on your water supply lines. These valves allow you to shut off the water quickly during emergencies or maintenance without turning off the entire building's supply.
        </p>
      </div>

      {/* Tip 4 */}
      <div style={{ padding: '30px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--secondary-blue)' }}>
        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '22px' }}>
          Maintenance of Bathroom Fixtures
        </h3>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
          To ensure your sanitary ware lasts for years, regular cleaning is necessary. Avoid using harsh, abrasive chemicals that can damage the polished surface of your sinks and taps. For stainless steel surgical sinks and commercial kitchen equipment, use recommended cleaning agents to maintain hygiene and prevent corrosion. If you notice any leaks or unusual noises, contact a professional plumber immediately.
        </p>
      </div>

    </div>
  );
};

export default PlumbingTips;