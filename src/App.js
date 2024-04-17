import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen1 from './pages/Screen1';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App abel-regular">
        <Router>
          <Routes>
            <Route path='/' element={<Screen1/>}  />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
