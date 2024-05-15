import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/motivatelogo.png'
import './SignIn.scss'

const SignIn = ({ handleLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users')
        return savedUsers ? JSON.parse(savedUsers) : []
    })
    console.log(users)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()

        const user = users.find((user) => user.email === formData.email && user.password === formData.password)

        if (user) {
            alert('Sign in successful!')
            handleLogin()
            navigate("/")
        }else {
            alert('Invalid email or password. Please try again.')
        }
    }

    return (
        <div>
            <form onSubmit={handleSignIn}>
               <img src={logo} alt="Motivate Me Logo" className="logo" />
               <h1>Sign In</h1>
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
                <button type='submit'>Sign In</button>
                <p>Forgot Password?</p>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
            
            
            
        </div>
    );
};

export default SignIn;