import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header style={{ backgroundColor: 'var(--white)', borderBottom: '1px solid #eaeaea', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', position: 'relative' }}>
        
        {/* Logo na Jina la Kampuni */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} onClick={closeMenu}>
          <img src="/images/logo.png" alt="Rupee Logo" style={{ height: '45px' }} />
          <div>
            <h1 style={{ fontSize: '16px', margin: 0, fontWeight: '700' }}>
              <span className="animated-text">RUPEE PLUMBING</span>
            </h1>
            <p style={{ fontSize: '9px', color: '#666', margin: 0, fontWeight: '700' }}>SOLUTION COMPANY LTD</p>
          </div>
        </Link>

        {/* Kitufe cha Menu (Kinaonekana kwenye simu tu kwa kutumia CSS) */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Menyu */}
        <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" style={linkStyle(location.pathname === '/')} onClick={closeMenu}>Home</Link>
          <Link to="/about" style={linkStyle(location.pathname === '/about')} onClick={closeMenu}>About Us</Link>
          <Link to="/products" style={linkStyle(location.pathname === '/products')} onClick={closeMenu}>Products</Link>
          <Link to="/services" style={linkStyle(location.pathname === '/services')} onClick={closeMenu}>Services</Link>
          <Link to="/partners" style={linkStyle(location.pathname === '/partners')} onClick={closeMenu}>Partners</Link>
          <Link to="/projects" style={linkStyle(location.pathname === '/projects')} onClick={closeMenu}>Projects</Link>
          <Link to="/tips" style={linkStyle(location.pathname === '/tips')} onClick={closeMenu}>Tips</Link>
          
          {/* Kitufe cha Login */}
          <Link to="/admin" style={linkStyle(location.pathname === '/admin')} onClick={closeMenu}>Login</Link>
          
          {/* Kitufe cha Mawasiliano */}
          <Link to="/contact" className="btn-primary" style={{ padding: '8px 15px', fontSize: '13px', textAlign: 'center' }} onClick={closeMenu}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

const linkStyle = (isActive) => ({
  color: isActive ? 'var(--secondary-blue)' : 'var(--text-dark)',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '14px',
  borderBottom: isActive ? '2px solid var(--secondary-blue)' : '2px solid transparent',
  paddingBottom: '4px',
  transition: 'color 0.3s'
});

export default Header;