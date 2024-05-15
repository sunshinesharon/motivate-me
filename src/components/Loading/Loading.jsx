import React from 'react';
import logo from '../../assets/motivatelogo.png';
import '../Welcome/Welcome.scss';


const Loading = () => {
  return (
    <div className="welcome">
      <img src={logo} alt="Motivate Me Logo" className="logo" />
      <h1>Loading...</h1>
      <p>we want to find what will motivate you</p>
    </div>
  );
};

export default Loading;