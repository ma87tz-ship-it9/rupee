import { useState, useEffect } from 'react';

const ProductList = () => {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    fetch('/api/images?type=product')
      .then(res => res.json())
      .then(data => setProductImages(data));
  }, []);

  return (
    <div className="grid-3">
      {productImages.map((image, index) => (
        <div key={index} className="product-3d-card">
          <div style={{ height: '300px', overflow: 'hidden' }}>
            <img 
              src={`/images/${image}`} 
              alt={`Product ${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;