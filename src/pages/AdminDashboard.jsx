import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
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

  const handleDelete = async (fileName, type) => {
    if (!window.confirm('Una uhakika unataka kufuta picha hii?')) return;

    const res = await fetch('/api/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fileName, type })
    });

    if (res.ok) {
        alert('Picha imefutwa!');
        fetchImages(type, type === 'hero' ? setHeroImages : setProductImages);
    } else {
        alert('Imeshindikana kufuta picha.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('rupee_admin_token');
    navigate('/admin');
  };

  return (
    <div className="container" style={{ padding: '120px 0 60px 0' }}>
      {/* Kichwa cha Dashboard */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="page-title" style={{ fontSize: '36px', marginBottom: '10px' }}>Admin Dashboard</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Manage your website images here.</p>
        <button onClick={handleLogout} className="btn-primary" style={{ backgroundColor: 'red', padding: '10px 25px' }}>Logout</button>
      </div>
      
      {/* Sehemu ya Hero Slider */}
      <div className="booking-form-card" style={{ marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Hero Slider Images</h3>
        <input type="file" multiple accept="image/jpeg, image/jpg" onChange={(e) => handleMultipleUpload(e, 'hero')} className="form-input" disabled={uploading} />
        
        {uploading && (
            <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', marginTop: '10px' }}>
                <div style={{ width: `${progress}%`, backgroundColor: 'var(--secondary-blue)', height: '10px', borderRadius: '5px', transition: 'width 0.3s' }}></div>
                <p style={{ textAlign: 'center', fontSize: '12px' }}>{progress}% imepakiwa...</p>
            </div>
        )}

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {heroImages.map((img, i) => (
            <div key={i} style={{ position: 'relative' }}>
                <img src={`${R2_PUBLIC_URL}/${img}`} alt="hero" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                <button onClick={() => handleDelete(img, 'hero')} style={{ position: 'absolute', top: '2px', right: '2px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', fontSize: '12px' }}>×</button>
            </div>
          ))}
        </div>
      </div>

      {/* Sehemu ya Products */}
      <div className="booking-form-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Images</h3>
        <input type="file" multiple accept="image/jpeg, image/jpg" onChange={(e) => handleMultipleUpload(e, 'product')} className="form-input" disabled={uploading} />
        
        {uploading && (
            <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', marginTop: '10px' }}>
                <div style={{ width: `${progress}%`, backgroundColor: 'var(--secondary-blue)', height: '10px', borderRadius: '5px', transition: 'width 0.3s' }}></div>
                <p style={{ textAlign: 'center', fontSize: '12px' }}>{progress}% imepakiwa...</p>
            </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '10px', marginTop: '20px' }}>
          {productImages.map((img, i) => (
            <div key={i} style={{ position: 'relative' }}>
                <img src={`${R2_PUBLIC_URL}/${img}`} alt="product" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                <button onClick={() => handleDelete(img, 'product')} style={{ position: 'absolute', top: '2px', right: '2px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', fontSize: '12px' }}>×</button>
            </div>
          ))}
        </div>
      </div>

      {/* Developed By */}
      <div style={{ textAlign: 'center', marginTop: '60px', color: '#666', fontSize: '14px' }}>
        Website developed by <a href="https://www.instagram.com/matomediatz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-blue)', textDecoration: 'none', fontWeight: 'bold' }}>MATO MEDIA TZ</a>
      </div>
    </div>
  );
};

export default AdminDashboard;