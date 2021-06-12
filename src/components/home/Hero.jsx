import React from 'react'

const Hero = () => {
  return (
    <>
      <header className='hero'>
        <div className='section-center hero-center'>
          <article className='hero-info'>
            <div className='underline'></div>
            <h1>i'm john</h1>
            <h4>freelance web & mobile UI/UX Designer</h4>
            <a href='contact.html' className='btn hero-btn'>
              hire me
            </a>
            <ul className='social-icons hero-icons'>
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
          </article>
          <article className='hero-img'>
            <img src='./images/hero-img.jpeg' className='hero-photo' alt='john doe' />
          </article>
        </div>
      </header>
    </>
  )
}

export default Hero
