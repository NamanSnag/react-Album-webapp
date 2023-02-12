import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Navbar, Loader} from '../component/index';
import { Home, NewAlbum } from '../pages';
import { API_URLS } from '../utils';

import './style.scss';

function App() {

  const [albums, setAlbums] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true);
    fetch(API_URLS.albums)
    .then(res => res.json())
    .then(data => setAlbums(data))
    .catch(err => console.log(err));
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);


  return (
    <div className='App'>  
      <Router>
        <Navbar/>
        { loading ? <Loader /> :
          <Routes>
              <Route path='/' element={<Home albums={albums} setAlbums={setAlbums}/>} />
              <Route path='/New_Album' element={<NewAlbum albums={albums} setAlbums={setAlbums}/>} />
          </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
