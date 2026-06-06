import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const isValid = form.email && form.password;

  const handleLogin = () => {
    if (isValid) navigate('/profile');
  };

  return (
    <div className="page">
      <h1>Signin to your<br />PopX account</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
      
      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      <button 
        className={`btn ${isValid ? 'btn-primary' : 'btn-disabled'}`}
        onClick={handleLogin}
        disabled={!isValid}
      >
        Login
      </button>
    </div>
  );
}