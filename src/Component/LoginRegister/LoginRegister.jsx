import React, { useState } from "react";
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const registerLink = () => setAction('active');
    const loginLink = () => setAction('');

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = loginData;

        // 🔐 Temporary hardcoded login (for testing)
        if (username === "Admin" && password === "1234") {
            localStorage.setItem("user", JSON.stringify({ username }));
            alert("Login successful (temporary user)");
            navigate("/dashboard");
            return;
        }

        try {
            const response = await axios.post('http://localhost:7108/api/auth/login', loginData);
            localStorage.setItem("user", JSON.stringify(response.data)); // Store user
            alert("Login successful");
            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data || "Login failed");
        }
    };

    // Handle Registration
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7108/api/auth/register', registerData);
            alert(response.data || "Registration successful");
            setAction('');
        } catch (error) {
            alert(error.response?.data || "Registration failed");
        }
    };

    return (
        <div className="content">
            <div className={`wrapper ${action}`}>
                {/* Login Form */}
                <div className="form-box login">
                    <form className="form" onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
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
                                required
                                value={loginData.password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                        </div>
                    </form>
                </div>

                {/* Register Form */}
                <div className="form-box register">
                    <form className="form" onSubmit={handleRegister}>
                        <h1>Register</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                value={registerData.username}
                                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
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
                                required
                                value={registerData.password}
                                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            />
                            <FaLock className="icon" />
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


