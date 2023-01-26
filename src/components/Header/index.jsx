import React from 'react';
import './Header.css';
import logo from '@assets/pokeball.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <div className='nav-item'>
          <Link to='/'>
          <img src={logo} alt='logo' className='logo'/>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;