import React, { useState } from "react";
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const LoginRegister = () => {
  const [action, setAction] = useState('');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'User'
  });

  const navigate = useNavigate();
  const { setUser } = useAuth();

  const loginFormKey = action === '' ? 'login' : 'login-hidden';
  const registerFormKey = action === 'active' ? 'register' : 'register-hidden';

  const registerLink = (e) => {
    e.preventDefault();
    setAction('active');
    setLoginData({ username: '', password: '' });
    setRegisterData({ username: '', email: '', password: '', role: 'User' });
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
    setLoginData({ username: '', password: '' });
    setRegisterData({ username: '', email: '', password: '', role: 'User' });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7108/api/auth/login', loginData);
      const userData = response.data;

      // Store values in localStorage
      localStorage.setItem("token", userData.token);
      localStorage.setItem("role", userData.role); // ✅ store role separately for sidebar
      localStorage.setItem("user", JSON.stringify({ username: userData.username, role: userData.role }));

      // Update context
      setUser({ username: userData.username, role: userData.role });

      alert(userData.message || "Login successful");

      setLoginData({ username: '', password: '' });

      navigate("/dashboard", { replace: true });
    } catch (error) {
      const message = error.response?.data?.message || "Login failed. Please try again.";
      alert(message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!registerData.username || !registerData.email || !registerData.password || !registerData.role) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post('https://localhost:7108/api/auth/register', registerData);
      alert(response.data.message);

      setRegisterData({ username: '', email: '', password: '', role: 'User' });
      setAction('');
      setLoginData({ username: '', password: '' });
    } catch (error) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        alert("Registration failed:\n" + errors.join('\n'));
      } else {
        const message = error.response?.data?.message || "Registration failed. Please try again.";
        alert(message);
      }
    }
  };

  return (
    <div className="content">
      <div className={`wrapper ${action}`}>
        {/* 🔐 Login Form */}
        <div className="form-box login" key={loginFormKey}>
          <form className="form" onSubmit={handleLogin} autoComplete="off" noValidate>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                autocomplete="off"
                required
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                autocomplete="off"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <span className="forgot-link">Forgot password?</span>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
          </form>
        </div>

        {/* 📝 Register Form */}
        <div className="form-box register" key={registerFormKey}>
          <form className="form" onSubmit={handleRegister} autoComplete="off" noValidate>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                autocomplete="off"
                required
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                autocomplete="off"
                required
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
              <FaLock className="icon" />
            </div>

            {/* 🔽 Role Dropdown */}
            <div className="input-box">
              <select
                value={registerData.role}
                onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
                className="role-select"
                required
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" /> I agree to the terms & conditions</label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;


