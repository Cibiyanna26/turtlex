import './App.css';
import React , {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])
  return (
    <div className="App abel-regular w-[100vw] scroll-smooth overflow-hidden" data-aos="fade-up">
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
