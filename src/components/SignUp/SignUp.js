import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/motivatelogo.png'
import './SignUp.scss'

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      })
    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users')
        return savedUsers ? JSON.parse(savedUsers) : []
    })
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {...formData}
        setUsers([...users, newUser])

        localStorage.setItem('users', JSON.stringify([...users, newUser]))
        setFormData({ username: '', email: '', password: '' })
        console.log(newUser)

        alert('You can log in now')
      }
    return (
        <div className="signup">
            <img src={logo}  alt="Motivate Me Logo" className="logo" />
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                value={formData.username}
                placeholder='Enter your username'
                onChange={handleChange}
                required
                />
                <input
                type="email"
                name="email"
                value={formData.email}
                placeholder='Enter your email'
                onChange={handleChange}
                required
                />
                <input
                type="password"
                name="password"
                value={formData.password}
                placeholder='Enter your password'
                onChange={handleChange}
                required
                />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            </form>
            
      </div>
    );
};

export default SignUp;