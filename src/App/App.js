import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Navbar} from '../component/index';
import { Home, NewAlbum } from '../pages';

import './style.scss';

function App() {
  return (
    <>  
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/New_Album' element={<NewAlbum/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
