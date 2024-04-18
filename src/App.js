import './App.css';
import React , {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import { Toaster } from 'react-hot-toast';
function App() {
  
  return (
    <div className="App abel-regular w-[100vw] h-[100vh] scroll-smooth overflow-hidden">
      <Toaster/>
        <Router>
          <Routes>
            <Route path='/screen1' element={<Screen1/>}  />
            <Route path='/' element={<Screen2/>}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
