import './App.css';
import React , {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import ErrorPage from './components/Errorpage';


function App() {
  
  return (
    <div className="App abel-regular w-[100vw] scroll-smooth overflow-hidden relative ">
        <Router>
          <Routes>
            <Route path='/signin' element={<Screen1/>}  />
            <Route path='/home' element={<Screen2/>}></Route>
            <Route path='/' element={<Navigate to={'/signin'}/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
