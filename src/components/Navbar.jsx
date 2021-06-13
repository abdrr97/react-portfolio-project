import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext)

  // auth
  const [authError, setAuthError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const handleLogout = () => {
    setAuthError('')
    try {
      logout().then(() => {
        history.push('/log-in')
      })
    } catch (ex) {
      setAuthError(ex.message)
    }
  }
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

            {currentUser ? (
              <>
                <li>
                  <Link to='/profile'>my profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className='nav__link'>
                    logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to='/log-in'>login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
