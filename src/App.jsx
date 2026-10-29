import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Projects from './pages/Projects';
import PlumbingTips from './pages/PlumbingTips';
import Contact from './pages/Contact';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <Router>
      {/* BACKGROUND ANIMATION: Vitu Vinapita (Light Beams, Particles, Lines) */}
      <div className="app-background">
        {/* Mistari ya Mwanga (Light Beams) */}
        <div className="light-beam"></div>
        <div className="light-beam-2"></div>
        
        {/* Vijidudu (Particles) */}
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Mistari Mipanab (Vertical Lines) */}
        <div className="vertical-line"></div>
        <div className="vertical-line"></div>
        <div className="vertical-line"></div>
      </div>

      {/* MAUDHUI YA WEBSITE (Iko juu ya background) */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tips" element={<PlumbingTips />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* AI Chat Assistant - Inaonekana kwenye kila ukurasa */}
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;