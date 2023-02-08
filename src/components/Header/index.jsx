import './Header.css';
import logo from '@assets/pokeball.svg';

import { Link } from 'react-router-dom';

import Search from '@components/Search';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='nav-item logo-container'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo'/>
          </Link>
        </div>

        <div className='nav-item search-nav-container'>
          <Search/>
        </div>
        
      </nav>
    </header>
  )
}

export default Header;