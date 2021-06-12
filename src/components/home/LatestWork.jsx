import React from 'react'

const LatestWork = () => {
  return (
    <>
      <section className='section projects'>
        <div className='section-title'>
          <h2>latest works</h2>
          <div className='underline'></div>
          <p className='projects-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed reiciendis quis
            provident vero cum accusamus illum perferendis debitis, alias porro? Incidunt, veniam?
            Dicta adipisci accusamus officia temporibus inventore a.
          </p>
        </div>
        <div className='section-center projects-center'>
          <a href='projects.html' className='project-1'>
            <article className='project'>
              <img src='./images/project-1.jpeg' alt='' className='project-img' />
              <div className='project-info'>
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
          <a href='projects.html' className='project-2'>
            <article className='project'>
              <img src='./images/project-2.jpeg' alt='' className='project-img' />
              <div className='project-info'>
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
          <a href='projects.html' className='project-3'>
            <article className='project'>
              <img src='./images/project-3.jpeg' alt='' className='project-img' />
              <div className='project-info'>
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
          <a href='projects.html' className='project-4'>
            <article className='project'>
              <img src='./images/project-4.jpeg' alt='' className='project-img' />
              <div className='project-info'>
                <h4>project title</h4>
                <p>client name</p>
              </div>
            </article>
          </a>
        </div>
      </section>
    </>
  )
}

export default LatestWork
