import React from 'react'

const ServicesSection = () => {
  return (
    <>
      <section className='section bg-grey'>
        <div className='section-title'>
          <h2>services</h2>
          <div className='underline'></div>
        </div>
        <div className='section-center services-center'>
          <article className='service'>
            <i className='fas fa-code service-icon'></i>
            <h4>web development</h4>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique at repellendus
              eius omnis asperiores laborum reprehenderit quis pariatur quidem placeat.
            </p>
          </article>
          <article className='service'>
            <i className='fab fa-sketch service-icon'></i>
            <h4>web design</h4>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique at repellendus
              eius omnis asperiores laborum reprehenderit quis pariatur quidem placeat.
            </p>
          </article>
          <article className='service'>
            <i className='fab fa-android service-icon'></i>
            <h4>app design</h4>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique at repellendus
              eius omnis asperiores laborum reprehenderit quis pariatur quidem placeat.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default ServicesSection
