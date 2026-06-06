import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="page landing">
      <h1>Welcome to PopX</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
      <button className="btn btn-primary" onClick={() => navigate('/signup')}>
        Create Account
      </button>
      <button className="btn btn-secondary" onClick={() => navigate('/login')}>
        Already Registered? Login
      </button>
    </div>
  );
}