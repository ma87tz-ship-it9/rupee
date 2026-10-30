import { useState, useEffect } from 'react';

const Products = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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
            <div key={index} className="product-3d-card">
              <img 
                src={`/r2-images/${img}`} 
                alt={`Product ${index + 1}`} 
                className="product-image" 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;