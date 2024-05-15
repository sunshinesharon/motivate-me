import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">Sign In</button>
            </form>
            
            
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};

export default SignIn;