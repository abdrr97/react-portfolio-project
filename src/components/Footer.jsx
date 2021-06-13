import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <ul className='social-icons'>
          <li>
            <a href='https://www.twitter.com' className='social-icon'>
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' className='social-icon'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' className='social-icon'>
              <i className='fab fa-squarespace'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' className='social-icon'>
              <i className='fab fa-behance'></i>
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' className='social-icon'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
        </ul>

        <p>
          &copy; <span id='date'></span> John Doe. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default Footer
