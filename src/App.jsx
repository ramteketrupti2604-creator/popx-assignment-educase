import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import './index.css';

const routes = ['/', '/login', '/signup', '/profile'];

function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = routes.indexOf(location.pathname);
    setCurrentIndex(index === -1? 0 : index);
  }, [location]);

  const handlePrev = () => {
    if (currentIndex > 0) navigate(routes[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex < routes.length - 1) navigate(routes[currentIndex + 1]);
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="bottom-nav">
      <button className="nav-icon" onClick={handleHome}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 10V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V10" stroke="#1D2226" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2L2 10H22L12 2Z" stroke="#1D2226" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        className="nav-arrow" 
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      
      <span className="nav-page">{currentIndex + 1} of {routes.length}</span>
      
      <button 
        className="nav-arrow" 
        onClick={handleNext}
        disabled={currentIndex === routes.length - 1}
      >
        &gt;
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <NavigationBar />
      </div>
    </BrowserRouter>
  );
}

export default App;