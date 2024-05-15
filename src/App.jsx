import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Loading from './components/Loading/Loading';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/loading" element={<Loading/>} />
      </Routes>
    </Router>
  );
};

export default App;