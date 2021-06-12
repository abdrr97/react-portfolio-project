import React from 'react'

const AboutSection = () => {
  return (
    <>
      <section className='section about'>
        <div className='section-center about-center'>
          <article className='about-img'>
            <img src='./images/about-img.jpeg' className='hero-photo' alt='' />
          </article>
          <article className='about-info'>
            <div className='section-title about-title'>
              <h2>about</h2>
              <div className='underline'></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque incidunt
              eveniet nisi beatae aliquid illo magni ullam animi vero, eius cum debitis hic
              doloribus assumenda ducimus? Ducimus, expedita, maiores velit quo facilis qui hic
              voluptatum voluptas ea officiis maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque incidunt
              eveniet nisi beatae aliquid illo magni ullam animi vero, eius cum debitis hic
              doloribus assumenda ducimus? Ducimus, expedita, maiores velit quo facilis qui hic
              voluptatum voluptas ea officiis maxime?
            </p>
            <a href='about.html' className='btn about-btn'>
              about me
            </a>
          </article>
        </div>
      </section>
    </>
  )
}

export default AboutSection
