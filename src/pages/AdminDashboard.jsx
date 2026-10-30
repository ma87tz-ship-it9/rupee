import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('rupee_admin_token')) {
      navigate('/admin');
    } else {
      fetchImages('hero', setHeroImages);
      fetchImages('product', setProductImages);
    }
  }, [navigate]);

  const fetchImages = async (type, setter) => {
    const res = await fetch(`/api/images?type=${type}`);
    const data = await res.json();
    setter(data);
  };

  const handleUpload = async (e, type) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', type);

    await fetch('/api/upload', { method: 'POST', body: formData });
    alert('Picha imepakiwa!');
    fetchImages(type, type === 'hero' ? setHeroImages : setProductImages);
    e.target.value = '';
  };

  const handleLogout = () => {
    localStorage.removeItem('rupee_admin_token');
    navigate('/admin');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 className="page-title">Admin Dashboard</h2>
        <button onClick={handleLogout} className="btn-primary" style={{ backgroundColor: 'red' }}>Logout</button>
      </div>
      
      {/* Sehemu ya Hero Slider */}
      <div className="booking-form-card" style={{ marginBottom: '40px' }}>
        <h3>Hero Slider Images</h3>
        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'hero')} className="form-input" />
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
          {heroImages.map((img, i) => (
            <img key={i} src={`/images/${img}`} alt="hero" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
          ))}
        </div>
      </div>

      {/* Sehemu ya Products */}
      <div className="booking-form-card">
        <h3>Product Images</h3>
        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'product')} className="form-input" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '10px', marginTop: '20px' }}>
          {productImages.map((img, i) => (
            <img key={i} src={`/images/${img}`} alt="product" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;