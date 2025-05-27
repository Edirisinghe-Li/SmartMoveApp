import './App.css';
import NavBar from './Component/LoginRegister/NavBar';
import { HashRouter as HRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
