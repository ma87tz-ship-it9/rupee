import { useState } from 'react';

const Admin = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      
      if (data.success) {
        setMessage(`Picha imepakiwa! URL: ${data.url}`);
      } else {
        setMessage('Imeshindikana kupakia picha.');
      }
    } catch (err) {
      setMessage('Kosa: ' + err.message);
    }
    setUploading(false);
  };

  return (
    <div className="container" style={{ padding: '80px 0', maxWidth: '500px' }}>
      <h2 className="page-title">Admin Upload</h2>
      <form onSubmit={handleUpload} className="booking-form-card">
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="form-input" />
        <button type="submit" className="btn-primary" disabled={uploading} style={{ marginTop: '20px' }}>
          {uploading ? 'Inapakia...' : 'Upload Image'}
        </button>
        {message && <p style={{ marginTop: '15px', color: 'green' }}>{message}</p>}
      </form>
    </div>
  );
};

export default Admin;