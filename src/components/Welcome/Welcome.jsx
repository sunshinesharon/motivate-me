import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/motivatelogo.png';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={logo} alt="Motivate Me Logo" className="logo" />
      <h1>Motivate Me</h1>
      <Link to="/signup" className="button">I'm ready</Link>
    </div>
  );
};

export default Welcome;
