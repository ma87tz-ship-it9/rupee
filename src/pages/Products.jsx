const Products = () => {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      
      {/* Kichwa cha Ukurasa */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="page-title">Our Products</h2>
        <p className="page-subtitle">
          Explore our wide range of genuine plumbing and sanitary materials. We supply high-quality products for residential, commercial, and industrial projects.
        </p>
      </div>
      
      {/* Grid ya Picha */}
      <div className="grid-3">
        {/* Picha 1 */}
        <div className="product-3d-card">
          <img src="/images/products/product1.jpg" alt="Product 1" className="product-image" />
        </div>

        {/* Picha 2 */}
        <div className="product-3d-card">
          <img src="/images/products/product2.jpg" alt="Product 2" className="product-image" />
        </div>

        {/* Picha 3 */}
        <div className="product-3d-card">
          <img src="/images/products/product3.jpg" alt="Product 3" className="product-image" />
        </div>

        {/* Picha 4 */}
        <div className="product-3d-card">
          <img src="/images/products/product4.jpg" alt="Product 4" className="product-image" />
        </div>

        {/* Picha 5 */}
        <div className="product-3d-card">
          <img src="/images/products/product5.jpg" alt="Product 5" className="product-image" />
        </div>

        {/* Picha 6 */}
        <div className="product-3d-card">
          <img src="/images/products/product6.jpg" alt="Product 6" className="product-image" />
        </div>

        {/* Picha 7 */}
        <div className="product-3d-card">
          <img src="/images/products/product7.jpg" alt="Product 7" className="product-image" />
        </div>

        {/* Picha 8 */}
        <div className="product-3d-card">
          <img src="/images/products/product8.jpg" alt="Product 8" className="product-image" />
        </div>
      </div>
    </div>
  );
};

export default Products;