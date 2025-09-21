import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend logic now, just prevent default submit
    alert('Login submitted (no backend logic implemented)');
    if (formData.role === 'administrator') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <small style={{color: '#888', marginTop: '4px'}}>*Forget Password</small>

        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="administrator">Administrator</option>
        </select>

        <button type="submit" className="register-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
