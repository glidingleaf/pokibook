import React from 'react';
import Header from '@components/Header';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>

      <Header />
      <main>
        {children}
      </main>

    </div>

  )
}

export default Layout