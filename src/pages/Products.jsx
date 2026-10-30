import { useState, useEffect } from 'react';

const Products = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // Kwa ajili ya modal

  const R2_PUBLIC_URL = 'https://pub-17567c58742b465eb6e01709174ac856.r2.dev';

  useEffect(() => {
    fetch('/api/images?type=product')
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Kosa la kupata picha:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="page-title">Our Products</h2>
        <p className="page-subtitle">
          Explore our wide range of genuine plumbing and sanitary materials. We supply high-quality products for residential, commercial, and industrial projects.
        </p>
      </div>
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <p>Loading products...</p>
        </div>
      ) : images.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px 0', backgroundColor: 'var(--bg-light)', borderRadius: '8px' }}>
          <p style={{ fontSize: '18px', color: '#666' }}>No products available yet. Please check back later.</p>
        </div>
      ) : (
        <div className="grid-3">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="product-3d-card" 
              onClick={() => setSelectedImage(img)} // Fungua modal ukigusa picha
              style={{ cursor: 'pointer' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img 
                  src={`${R2_PUBLIC_URL}/${img}`} 
                  alt={`Product ${index + 1}`} 
                  className="product-image" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onContextMenu={(e) => e.preventDefault()} // Zuia right-click kwenye picha
                />
                {/* WATERMARK: Logo juu ya picha */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px', 
                    width: '50px', 
                    height: '50px', 
                    backgroundImage: 'url(/images/logo.png)', 
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat', 
                    opacity: 0.6,
                    pointerEvents: 'none' 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL YA KUONYESHA PICHA KWA UKUBWA */}
      {selectedImage && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.9)', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            zIndex: 9999 
          }}
          onClick={() => setSelectedImage(null)} // Funga modal ukigusa nje
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <img 
              src={`${R2_PUBLIC_URL}/${selectedImage}`} 
              alt="Product Preview" 
              style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
              onContextMenu={(e) => e.preventDefault()} // Zuia right-click
            />
            {/* WATERMARK KUBWA KWENYE MODAL */}
            <div 
              style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
                width: '100px', 
                height: '100px', 
                backgroundImage: 'url(/images/logo.png)', 
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                opacity: 0.5,
                pointerEvents: 'none' 
              }}
            ></div>
            
            {/* Kitufe cha Kufunga */}
            <button 
              onClick={() => setSelectedImage(null)}
              style={{ 
                position: 'absolute', 
                top: '-40px', 
                right: '0', 
                background: 'transparent', 
                color: 'white', 
                border: 'none', 
                fontSize: '30px', 
                cursor: 'pointer' 
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;