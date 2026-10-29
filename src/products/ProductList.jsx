const ProductList = () => {
  // Andika majina ya picha zote zilizopo kwenye folda ya public/images/products/
  const productImages = [
    '/images/products/picha1.jpg',
    '/images/products/picha2.jpg',
    '/images/products/picha3.jpg',
    '/images/products/picha4.jpg',
    '/images/products/picha5.jpg',
    '/images/products/picha6.jpg',
    '/images/products/picha7.jpg',
    '/images/products/picha8.jpg',
    // Ongeza nyingine hapa chini kama unazo...
  ];

  return (
    <div className="grid-3">
      {productImages.map((image, index) => (
        <div key={index} className="product-3d-card">
          <div style={{ height: '300px', overflow: 'hidden' }}>
            <img 
              src={image} 
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