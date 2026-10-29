import { useState } from 'react';

const Booking = () => {
  // Hali ya kuhifadhi taarifa za fomu
  const [formData, setFormData] = useState({
    location: '',
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myWhatsAppNumber = "255621059547"; // Namba yako ya WhatsApp
    
    // Tengeneza ujumbe wa WhatsApp
    const text = `*NEW BOOKING - RUPEE PLUMBING*%0A%0A*Location:* ${formData.location}%0A*First Name:* ${formData.firstName}%0A*Last Name:* ${formData.lastName}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${text}`, '_blank');
    
    // Safisha fomu baada ya kutuma
    setFormData({ location: '', firstName: '', lastName: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="container" style={{ padding: '80px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'start' }}>
      
      {/* Maelezo ya Kushoto */}
      <div>
        <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px', fontSize: '36px' }}>Book a Service</h2>
        <p style={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
          Fill out the form below and we will receive your message instantly on WhatsApp. Our team will get back to you as soon as possible.
        </p>
        <div style={{ backgroundColor: 'var(--bg-light)', padding: '30px', borderRadius: '8px', borderLeft: '4px solid var(--secondary-blue)' }}>
          <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Why Book With Us?</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#555', lineHeight: '2' }}>
            <li>✔ Genuine & Original Materials</li>
            <li>✔ Expert Technical Advice</li>
            <li>✔ Fast Response on WhatsApp</li>
            <li>✔ Trusted by Contractors & Homeowners</li>
          </ul>
        </div>
      </div>

      {/* Fomu ya Booking */}
      <div className="booking-form-card">
        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '25px', fontSize: '24px' }}>Booking Form</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Location */}
          <input 
            type="text" 
            name="location" 
            placeholder="Location (e.g., Kariakoo, Dar es Salaam)" 
            required 
            onChange={handleChange} 
            value={formData.location} 
            className="form-input" 
          />
          
          {/* First Name */}
          <input 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            required 
            onChange={handleChange} 
            value={formData.firstName} 
            className="form-input" 
          />
          
          {/* Last Name */}
          <input 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            required 
            onChange={handleChange} 
            value={formData.lastName} 
            className="form-input" 
          />
          
          {/* Phone Number */}
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            required 
            onChange={handleChange} 
            value={formData.phone} 
            className="form-input" 
          />
          
          {/* Huduma */}
          <select name="service" required onChange={handleChange} value={formData.service} className="form-input">
            <option value="">Select Service</option>
            <option value="Purchase Plumbing Materials">Purchase Plumbing Materials</option>
            <option value="Purchase Sanitary Ware">Purchase Sanitary Ware</option>
            <option value="Purchase Stainless Sinks">Purchase Stainless Sinks</option>
            <option value="Installation & Maintenance">Installation & Maintenance</option>
            <option value="Expert Advice">Expert Advice</option>
          </select>
          
          {/* Maelezo ya Ziada */}
          <textarea 
            name="message" 
            placeholder="Additional Details (e.g., sizes, quantities)" 
            rows="4" 
            required 
            onChange={handleChange} 
            value={formData.message} 
            className="form-input"
          ></textarea>
          
          {/* Kitufe cha Send */}
          <button type="submit" className="btn-primary" style={{ padding: '15px', fontSize: '16px', width: '100%' }}>
            Send
          </button>
        </form>
      </div>

    </div>
  );
};

export default Booking;