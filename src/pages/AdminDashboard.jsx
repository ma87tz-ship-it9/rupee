import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
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

    // Kagua ukubwa (1MB)
    if (file.size > 1024 * 1024) {
        alert('Picha ni kubwa mno! Tafadhali tumia picha isiyozidi 1MB.');
        return;
    }

    // Kagua aina (jpg/jpeg)
    if (!file.type.includes('jpeg') && !file.type.includes('jpg')) {
        alert('Tafadhali tumia picha ya aina ya JPG/JPEG pekee.');
        return;
    }

    setUploading(true);
    setProgress(0);

    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', type);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/upload', true);

    // Hii inaonyesha maendeleo ya kupakia
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
      }
    };

    xhr.onload = () => {
        if (xhr.status === 200) {
            alert('Picha imepakiwa kikamilifu!');
            fetchImages(type, type === 'hero' ? setHeroImages : setProductImages);
        } else {
            alert('Imeshindikana kupakia picha.');
        }
        setUploading(false);
        setProgress(0);
        e.target.value = '';
    };

    xhr.send(formData);
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
    <div className="container" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 className="page-title">Admin Dashboard</h2>
        <button onClick={handleLogout} className="btn-primary" style={{ backgroundColor: 'red' }}>Logout</button>
      </div>
      
      {/* Sehemu ya Hero Slider */}
      <div className="booking-form-card" style={{ marginBottom: '40px' }}>
        <h3>Hero Slider Images</h3>
        <input type="file" accept="image/jpeg, image/jpg" onChange={(e) => handleUpload(e, 'hero')} className="form-input" disabled={uploading} />
        
        {/* Progress Bar */}
        {uploading && (
            <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', marginTop: '10px' }}>
                <div style={{ width: `${progress}%`, backgroundColor: 'var(--secondary-blue)', height: '10px', borderRadius: '5px', transition: 'width 0.3s' }}></div>
                <p style={{ textAlign: 'center', fontSize: '12px' }}>{progress}% imepakiwa...</p>
            </div>
        )}

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
          {heroImages.map((img, i) => (
            <div key={i} style={{ position: 'relative' }}>
                <img src={`/images/${img}`} alt="hero" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                <button onClick={() => handleDelete(img, 'hero')} style={{ position: 'absolute', top: '2px', right: '2px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', fontSize: '12px' }}>×</button>
            </div>
          ))}
        </div>
      </div>

      {/* Sehemu ya Products */}
      <div className="booking-form-card">
        <h3>Product Images</h3>
        <input type="file" accept="image/jpeg, image/jpg" onChange={(e) => handleUpload(e, 'product')} className="form-input" disabled={uploading} />
        
        {/* Progress Bar */}
        {uploading && (
            <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', marginTop: '10px' }}>
                <div style={{ width: `${progress}%`, backgroundColor: 'var(--secondary-blue)', height: '10px', borderRadius: '5px', transition: 'width 0.3s' }}></div>
                <p style={{ textAlign: 'center', fontSize: '12px' }}>{progress}% imepakiwa...</p>
            </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '10px', marginTop: '20px' }}>
          {productImages.map((img, i) => (
            <div key={i} style={{ position: 'relative' }}>
                <img src={`/images/${img}`} alt="product" style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
                <button onClick={() => handleDelete(img, 'product')} style={{ position: 'absolute', top: '2px', right: '2px', background: 'red', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', fontSize: '12px' }}>×</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;