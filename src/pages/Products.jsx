import { useState, useEffect } from 'react';

const Products = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/images?type=product')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="page-title">Our Products</h2>
        <p className="page-subtitle">
          Explore our wide range of genuine plumbing and sanitary materials. We supply high-quality products for residential, commercial, and industrial projects.
        </p>
      </div>
      
      <div className="grid-3">
        {images.map((img, index) => (
          <div key={index} className="product-3d-card">
            <img src={`/images/${img}`} alt={`Product ${index + 1}`} className="product-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;