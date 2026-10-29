const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--white)', marginTop: '60px', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ padding: '50px 0 30px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* Sehemu ya 1: Kuhusu Kampuni */}
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--white)' }}>RUPEE PLUMBING</h3>
          <p style={{ fontSize: '14px', color: '#cccccc', lineHeight: '1.8' }}>
            Genuine & Original Plumbing and Sanitary Materials for residential, commercial, and industrial projects in Dar es Salaam.
          </p>
        </div>

        {/* Sehemu ya 2: Mawasiliano */}
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--white)' }}>Contact Info</h3>
          <p style={{ fontSize: '14px', color: '#cccccc', marginBottom: '10px' }}>Location: Kariakoo, Gerezani Mbaruku / Nyamwez Street, Dar es Salaam.</p>
          <p style={{ fontSize: '14px', color: '#cccccc', marginBottom: '10px' }}>Phone: +255 621 059 547 | +255 716 018 071</p>
          <p style={{ fontSize: '14px', color: '#cccccc' }}>Email: albertrupee@gmail.com</p>
        </div>

        {/* Sehemu ya 3: Mitandao ya Kijamii */}
        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--white)' }}>Follow Us</h3>
          <p style={{ fontSize: '14px', color: '#cccccc', marginBottom: '15px' }}>Connect with us on social media for updates and new products.</p>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            {/* Instagram Icon */}
            <a 
              href="https://www.instagram.com/rupee.plumbing.solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'white', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              title="Follow us on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* WhatsApp Icon */}
            <a 
              href="https://wa.me/255621059547" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'white', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              title="Chat with us on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>

            {/* Facebook Icon (Kama unayo) */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'white', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              title="Follow us on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
      
      {/* Haki Miliki na Developer */}
      <div style={{ borderTop: '1px solid #1a3b5c', textAlign: 'center', padding: '20px 0', fontSize: '13px', color: '#cccccc' }}>
        <p>&copy; 2026 Rupee Plumbing Solution Company Ltd. All Rights Reserved.</p>
        <p style={{ marginTop: '5px' }}>
          Developed by <a href="https://www.instagram.com/matomediatz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-blue)', textDecoration: 'none', fontWeight: 'bold' }}>MATO MEDIA TZ</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;