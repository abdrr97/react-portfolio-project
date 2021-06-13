import React from 'react'

const Projects = () => {
  return (
    <>
      <header className='projects-hero'>
        <div className='section-title'>
          <h1>my projects</h1>
          <div className='underline'></div>
        </div>
      </header>
      <section className='section'>
        <div className='section-center projects-page-center'>
          <article className='single-project'>
            <div className='project-container'>
              <img src='./images/project-1.jpeg' alt='single project' />
              <a href='https://www.johnsmilga.com' className='project-icon'>
                <i className='fas fa-home'></i>
              </a>
            </div>
            <div className='project-details'>
              <h4>project name</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore placeat dicta
                eveniet similique excepturi magni quisquam sapiente delectus sunt quam.
              </p>
              <div className='project-footer'>
                <span>
                  <i className='fab fa-github'></i>
                </span>
                <a href='https://github.com'>source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Projects
