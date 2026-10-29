import { Link } from 'react-router-dom';
import { useState } from 'react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  // Hali ya kuhifadhi taarifa za fomu
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myWhatsAppNumber = "255621059547"; 
    
    // Ujumbe unakwenda WhatsApp ukiwa na taarifa zote
    const text = `*NEW BOOKING - RUPEE PLUMBING*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${text}`, '_blank');
    
    // Safisha fomu baada ya kutuma
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div>
      {/* 1. Slider ya Picha */}
      <HeroSlider />

      {/* 2. OUR FEATURED PRODUCTS (Sasa Ipo Juu) */}
      <section className="container" style={{ padding: '80px 0 40px 0' }}>
        <h2 className="page-title">Our Featured Products</h2>
        
        <div className="grid-3">
          
          {/* Kadi 1: Sanitary Ware */}
          <div className="product-3d-card">
            <img src="/images/sanitary1.jpg" alt="Sanitary Ware" className="product-image" />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', marginBottom: '10px' }}>Sanitary Ware</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>Modern bathroom sinks, toilets, and mirrors.</p>
            </div>
          </div>

          {/* Kadi 2: Stainless Steel Sinks */}
          <div className="product-3d-card">
            <img src="/images/sink1.jpg" alt="Stainless Steel Sinks" className="product-image" />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', marginBottom: '10px' }}>Stainless Steel Sinks</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>Surgical and commercial kitchen sinks.</p>
            </div>
          </div>

          {/* Kadi 3: Pipes & Fittings */}
          <div className="product-3d-card">
            <img src="/images/pipes1.jpg" alt="Pipes & Fittings" className="product-image" />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', marginBottom: '10px' }}>Pipes & Fittings</h3>
              <p style={{ color: '#666', fontSize: '14px' }}>Genuine PVC and PPR pipes and fittings.</p>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/products" className="btn-primary">View All Products</Link>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Sasa Ipo Chini) */}
      <section className="container" style={{ padding: '40px 0 80px 0' }}>
        <h2 className="page-title">Why Choose Rupee Plumbing</h2>
        <div className="grid-3">
          <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '20px' }}>Genuine Materials</h3>
            <p style={{ color: '#555' }}>We supply 100% original plumbing and sanitary materials from globally recognized brands.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '20px' }}>Expert Advice</h3>
            <p style={{ color: '#555' }}>Our team provides professional technical advice on the correct types of pipes and fittings.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px', fontSize: '20px' }}>Prime Location</h3>
            <p style={{ color: '#555' }}>Conveniently located in the heart of Kariakoo at Mbaruku/Nyamwezi Street, Gerezani.</p>
          </div>
        </div>
      </section>

      {/* 4. BOOKING FORM */}
      <section style={{ backgroundColor: 'var(--bg-light)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="page-title">Book a Service / Request a Quote</h2>
            <p className="page-subtitle">Fill out the form below and we will receive your message instantly on WhatsApp.</p>

            <div className="booking-form-card">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} value={formData.name} className="form-input" />
                <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} value={formData.phone} className="form-input" />
                <select name="service" required onChange={handleChange} value={formData.service} className="form-input">
                  <option value="">Select Service</option>
                  <option value="Purchase Plumbing Materials">Purchase Plumbing Materials</option>
                  <option value="Purchase Sanitary Ware">Purchase Sanitary Ware</option>
                  <option value="Purchase Stainless Sinks">Purchase Stainless Sinks</option>
                  <option value="Installation & Maintenance">Installation & Maintenance</option>
                  <option value="Expert Advice">Expert Advice</option>
                </select>
                <textarea name="message" placeholder="Additional Details" rows="4" required onChange={handleChange} value={formData.message} className="form-input"></textarea>
                <button type="submit" className="btn-primary">Send via WhatsApp</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;