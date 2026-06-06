import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleSignup = () => {
    navigate('/profile');
  };

  return (
    <div className="page signup-page">
      <h1>Create your<br />PopX account</h1>
      
      <div className="form-container">
        <div className="input-group">
          <label>Full Name<span>*</span></label>
          <input
            type="text"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Phone number<span>*</span></label>
          <input
            type="tel"
            placeholder="Marry Doe"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Email address<span>*</span></label>
          <input
            type="email"
            placeholder="Marry Doe"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Password<span>*</span></label>
          <input
            type="password"
            placeholder="Marry Doe"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input
            type="text"
            placeholder="Marry Doe"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?<span>*</span></p>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={(e) => setForm({ ...form, isAgency: e.target.value })}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={(e) => setForm({ ...form, isAgency: e.target.value })}
              />
              No
            </label>
          </div>
        </div>
      </div>

      <button className="btn btn-primary signup-btn" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}