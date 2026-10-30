import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const navigate = useNavigate();

  const R2_PUBLIC_URL = 'https://pub-17567c58742b465eb6e01709174ac856.r2.dev';

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

  const handleMultipleUpload = async (e, type) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    setProgress(0);

    let uploadedCount = 0;

    for (const file of files) {
        if (file.size > 1024 * 1024) {
            alert(`Picha ${file.name} ni kubwa mno! Tumia picha isiyozidi 1MB.`);
            continue;
        }
        if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
            alert(`Picha ${file.name} si JPG/JPEG. Ruka.`);
            continue;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('type', type);

        try {
            await fetch('/api/upload', { method: 'POST', body: formData });
            uploadedCount++;
            setProgress(Math.round((uploadedCount / files.length) * 100));
        } catch (err) {
            console.error(`Imeshindikana kupakia ${file.name}`, err);
        }
    }

    alert(`Picha ${uploadedCount} kati ya ${files.length} zimepakiwa!`);
    fetchImages(type, type === 'hero' ? setHeroImages : setProductImages);
    setUploading(false);
    setProgress(0);
    e.target.value = '';
  };

  const confirmDelete = (fileName, type) => {
    setDeleteTarget({ fileName, type });
  };

  const executeDelete = async () => {
    if (!deleteTarget) return;
    const { fileName, type } = deleteTarget;

    const res = await fetch('/api/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName, type })
    });

    if (res.ok) {
        fetchImages(type, type === 'hero' ? setHeroImages : setProductImages);
    } else {
        alert('Imeshindikana kufuta picha.');
    }
    setDeleteTarget(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('rupee_admin_token');
    navigate('/admin');
  };

  return (
    // Div ya nje inafanya ukurasa mzima uwe na background na urefu kamili
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Kichwa cha Dashboard */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '32px', color: 'var(--primary-blue)', marginBottom: '10px' }}>Admin Dashboard</h2>
          <p style={{ color: '#666', marginBottom: '20px' }}>Manage your website images here.</p>
          <button onClick={handleLogout} className="btn-primary" style={{ backgroundColor: '#dc3545', padding: '10px 25px' }}>Logout</button>
        </div>
        
        {/* Sehemu ya Hero Slider */}
        <div className="booking-form-card" style={{ marginBottom: '40px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Hero Slider Images</h3>
              <span style={{ backgroundColor: 'var(--secondary-blue)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '14px' }}>
                  {heroImages.length} Images
              </span>
          </div>
          
          <input type="file" multiple accept="image/jpeg, image/jpg" onChange={(e) => handleMultipleUpload(e, 'hero')} className="form-input" disabled={uploading} />
          
          {uploading && (
              <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', marginTop: '15px', overflow: 'hidden' }}>
                  <div style={{ width: `${progress}%`, backgroundColor: 'var(--secondary-blue)', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', transition: 'width 0.3s' }}>
                      {progress}%
                  </div>
              </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '15px', marginTop: '25px' }}>
            {heroImages.map((img, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <img src={`${R2_PUBLIC_URL}/${img}`} alt="hero" style={{ width: '100%', height: '80px', objectFit: 'cover' }} />
                  <button 
                      onClick={() => confirmDelete(img, 'hero')} 
                      style={{ position: 'absolute', top: '5px', right: '5px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                      ×
                  </button>
              </div>
            ))}
            {heroImages.length === 0 && <p style={{ color: '#999' }}>No images uploaded yet.</p>}
          </div>
        </div>

        {/* Sehemu ya Products */}
        <div className="booking-form-card" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Product Images</h3>
              <span style={{ backgroundColor: 'var(--secondary-blue)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '14px' }}>
                  {productImages.length} Images
              </span>
          </div>
          
          <input type="file" multiple accept="image/jpeg, image/jpg" onChange={(e) => handleMultipleUpload(e, 'product')} className="form-input" disabled={uploading} />
          
          {uploading && (
              <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', marginTop: '15px', overflow: 'hidden' }}>
                  <div style={{ width: `${progress}%`, backgroundColor: 'var(--secondary-blue)', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', transition: 'width 0.3s' }}>
                      {progress}%
                  </div>
              </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '15px', marginTop: '25px' }}>
            {productImages.map((img, i) => (
              <div key={i} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <img src={`${R2_PUBLIC_URL}/${img}`} alt="product" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                  <button 
                      onClick={() => confirmDelete(img, 'product')} 
                      style={{ position: 'absolute', top: '5px', right: '5px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                      ×
                  </button>
              </div>
            ))}
            {productImages.length === 0 && <p style={{ color: '#999' }}>No images uploaded yet.</p>}
          </div>
        </div>

        {/* CONFIRM MODAL YA KUFUTA */}
        {deleteTarget && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
              <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', maxWidth: '400px', width: '90%', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                  <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>Delete Image?</h3>
                  <p style={{ color: '#555', marginBottom: '25px' }}>Are you sure you want to delete this image? This action cannot be undone.</p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                      <button onClick={() => setDeleteTarget(null)} style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #ddd', backgroundColor: 'white', cursor: 'pointer', fontWeight: '600' }}>Cancel</button>
                      <button onClick={executeDelete} style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer', fontWeight: '600' }}>Delete</button>
                  </div>
              </div>
          </div>
        )}

        {/* Developed By */}
        <div style={{ textAlign: 'center', marginTop: '60px', color: '#666', fontSize: '14px' }}>
          Website developed by <a href="https://www.instagram.com/matomediatz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-blue)', textDecoration: 'none', fontWeight: 'bold' }}>MATO MEDIA TZ</a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;