import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem('rupee_admin_token', data.token);
      navigate('/admin-dashboard');
    } else {
      setError('Email au Password si sahihi.');
    }
  };

  return (
    <div className="container" style={{ padding: '100px 0', maxWidth: '400px' }}>
      <div className="booking-form-card">
        <h2 className="page-title">Admin Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" required />
          <button type="submit" className="btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;