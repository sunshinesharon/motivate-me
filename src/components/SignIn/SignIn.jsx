import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/motivatelogo.png';
import './SignIn.scss';

const SignIn = () => {
  return (
    <div className="signin">
      <img src={logo} alt="Motivate Me Logo" className="logo" />
      <h1>Sign In</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <p>Forgot Password?</p>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
