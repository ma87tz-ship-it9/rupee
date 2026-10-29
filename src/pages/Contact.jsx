import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myWhatsAppNumber = "255621059547"; // Namba yako ya WhatsApp
    const text = `*NEW BOOKING - RUPEE PLUMBING*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${text}`, '_blank');
    
    // Safisha fomu baada ya kutuma
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="container" style={{ padding: '60px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'start' }}>
      
      {/* Maelezo ya Mawasiliano */}
      <div>
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px', fontSize: '32px' }}>Contact Us</h2>
        <p style={{ marginBottom: '30px', fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
          We are always ready to assist you. Visit our showroom in Kariakoo or reach out to us through the following channels for any inquiries, quotations, or expert advice on plumbing and sanitary materials.
        </p>
        
        <div style={{ backgroundColor: 'var(--bg-light)', padding: '30px', borderRadius: '8px', borderLeft: '4px solid var(--secondary-blue)' }}>
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px', fontSize: '18px' }}>Location:</strong>
            <span style={{ color: '#555', fontSize: '16px' }}>Mbaruku / Nyamwezi Street, Kariakoo, Gerezani, Dar es Salaam.</span>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px', fontSize: '18px' }}>P.O. Box:</strong>
            <span style={{ color: '#555', fontSize: '16px' }}>21196 Dar es Salaam.</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px', fontSize: '18px' }}>Phone:</strong>
            <span style={{ color: '#555', fontSize: '16px' }}>+255 621 059 547 | +255 716 018 071</span>
          </div>

          <div>
            <strong style={{ display: 'block', color: 'var(--primary-blue)', marginBottom: '5px', fontSize: '18px' }}>Email:</strong>
            <span style={{ color: '#555', fontSize: '16px' }}>albertrupee@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="booking-form-card">
        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '25px', fontSize: '24px' }}>Book a Service / Request a Quote</h3>
        <p style={{ marginBottom: '20px', color: '#666', fontSize: '15px' }}>
          Fill out the form below and we will receive your message instantly on WhatsApp.
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} value={formData.name} style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} value={formData.phone} style={inputStyle} />
          
          <select name="service" required onChange={handleChange} value={formData.service} style={inputStyle}>
            <option value="">Select Service</option>
            <option value="Purchase Plumbing Materials (PVC, PPR, Fittings)">Purchase Plumbing Materials (PVC, PPR, Fittings)</option>
            <option value="Purchase Sanitary Ware (Sinks, Toilets, Mirrors)">Purchase Sanitary Ware (Sinks, Toilets, Mirrors)</option>
            <option value="Purchase Surgical/Commercial Stainless Sinks">Purchase Surgical/Commercial Stainless Sinks</option>
            <option value="Installation & Maintenance Services">Installation & Maintenance Services</option>
            <option value="Expert Advice on Plumbing Systems">Expert Advice on Plumbing Systems</option>
          </select>
          
          <textarea name="message" placeholder="Additional Details" rows="4" required onChange={handleChange} value={formData.message} style={inputStyle}></textarea>
          
          <button type="submit" className="btn-primary" style={{ padding: '15px', fontSize: '16px', width: '100%' }}>
            Send via WhatsApp
          </button>
        </form>
      </div>

    </div>
  );
};

const inputStyle = {
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontSize: '15px',
  fontFamily: 'Inter, sans-serif',
  backgroundColor: '#fafafa'
};

export default Contact;