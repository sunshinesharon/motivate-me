import React, { useEffect } from 'react';
import logo from '../../assets/motivatelogo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Welcome/Welcome.scss';


const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const next =  location.state?.next || '/';
      navigate(next);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location]); 

  return (
    <div className="welcome">
      <img src={logo} alt="Motivate Me Logo" className="logo" />
      <h1>Loading...</h1>
      <p>we want to find what will motivate you</p>
    </div>
  );
};

export default Loading;


