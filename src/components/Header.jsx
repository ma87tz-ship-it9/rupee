import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Kagua kama kifaa ni Simu au Kompyuta
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Funga menyu kila mtu anapobonyeza link
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid #eaeaea', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', position: 'relative' }}>
        
        {/* Logo na Jina la Kampuni */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }} onClick={closeMenu}>
          <img src="/images/logo.png" alt="Rupee Plumbing Logo" style={{ height: '50px' }} />
          <div>
            {/* HAPA NDO TUNAWEKA ANIMATION YA RANGI */}
            <h1 style={{ fontSize: '18px', margin: 0, fontWeight: '700' }}>
              <span className="animated-text">RUPEE PLUMBING</span>
            </h1>
            <p style={{ fontSize: '10px', color: '#666', margin: 0, fontWeight: '700', letterSpacing: '0.5px' }}>SOLUTION COMPANY LTD</p>
          </div>
        </Link>

        {/* KITUFE CHA MENU (Kinaonekana kwenye Simu Pekee) */}
        {isMobile && (
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '30px', color: 'var(--primary-blue)', padding: '5px' }}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* MENYU KUU */}
        <nav 
          style={
            isMobile 
            ? { 
                position: 'absolute', 
                top: '100%', 
                left: 0, 
                width: '100%', 
                backgroundColor: 'var(--white)', 
                flexDirection: 'column', 
                padding: '15px 20px', 
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                display: isMobileMenuOpen ? 'flex' : 'none',
                zIndex: 99,
                borderTop: '1px solid #eaeaea'
              }
            : { 
                display: 'flex', 
                gap: '20px', 
                alignItems: 'center' 
              }
          }
        >
          <Link to="/" style={linkStyle(location.pathname === '/', isMobile)} onClick={closeMenu}>Home</Link>
          <Link to="/about" style={linkStyle(location.pathname === '/about', isMobile)} onClick={closeMenu}>About Us</Link>
          <Link to="/products" style={linkStyle(location.pathname === '/products', isMobile)} onClick={closeMenu}>Products</Link>
          <Link to="/services" style={linkStyle(location.pathname === '/services', isMobile)} onClick={closeMenu}>Services</Link>
          <Link to="/partners" style={linkStyle(location.pathname === '/partners', isMobile)} onClick={closeMenu}>Partners</Link>
          <Link to="/projects" style={linkStyle(location.pathname === '/projects', isMobile)} onClick={closeMenu}>Projects</Link>
          <Link to="/tips" style={linkStyle(location.pathname === '/tips', isMobile)} onClick={closeMenu}>Tips</Link>
          
          {/* Kitufe cha Mawasiliano */}
          <Link 
            to="/contact" 
            className="btn-primary" 
            style={{ 
              padding: '12px 20px', 
              fontSize: '14px', 
              width: isMobile ? '100%' : 'auto', 
              marginTop: isMobile ? '15px' : '0',
              textAlign: 'center'
            }} 
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>

      </div>
    </header>
  );
};

// Mtindo wa viungo (Unabadilika kulingana na kama ni simu au kompyuta)
const linkStyle = (isActive, isMobile) => ({
  color: isActive ? 'var(--secondary-blue)' : 'var(--text-dark)',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '15px',
  padding: isMobile ? '12px 0' : '4px 0',
  borderBottom: isActive ? '2px solid var(--secondary-blue)' : '2px solid transparent',
  width: isMobile ? '100%' : 'auto',
  textAlign: isMobile ? 'center' : 'left',
  transition: 'color 0.3s'
});

export default Header;