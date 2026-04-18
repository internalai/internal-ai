import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Register from './pages/Register';
import TestBackend from './pages/TestBackend';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test-backend" element={<TestBackend />} />
      </Routes>
    </Router>
  );
}

export default App;