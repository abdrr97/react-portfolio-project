import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='nav' id='nav'>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src='./images/logo.svg' className='nav-logo' alt='' />
            <button className='nav-btn' id='nav-btn'>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/projects'>projects</Link>
            </li>
            <li>
              <Link to='/contact'>contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
