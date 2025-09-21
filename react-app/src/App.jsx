import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import ContactPage from './components/ContactPage';
import About from './components/About';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import Course from './components/Course';
import Courses from './pages/Courses';
import ClassDetail from './pages/ClassDetail';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="container">
              <Home />
            </div>
            <div className="container2">
              <Service />
            </div>
            <div className="container">
              <section id="about">
                <About />
              </section>
            </div>
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/courses" element={<Course />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/class/:id" element={<ClassDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
