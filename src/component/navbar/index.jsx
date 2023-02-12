import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './style.scss'

const Navbar = () => {

  const [active, setActive] = useState('Home');

  const handalActive = (item) => {
    setActive(item);
  };

  return (
    <>
      <nav className='navbar' >
        <div className='logo'>
            <img src='https://cdn-icons-png.flaticon.com/128/7476/7476874.png' alt='logo' />
            <p>Album</p>
        </div>
        <ul className='navbar-links'>
        {['Home', 'New_Album'].map((item)=>{
          return (<li key={`navLink${item}}`}>
            <Link to={(item === 'Home') ? '/' :`/${item}`} style={(active === item) ? {color: 'white'} : null } onClick={()=>handalActive(item)} >
              {item}
            </Link>
            <div/>
          </li>)
        })}
      </ul>
      </nav>
    </>
  )
}

export default Navbar;
