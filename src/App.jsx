import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Welcome} />
      </Routes>
    </Router>
  );
};

export default App;