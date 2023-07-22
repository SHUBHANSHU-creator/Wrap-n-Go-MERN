import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Register from './components/Register';
import Login from './components/Login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}