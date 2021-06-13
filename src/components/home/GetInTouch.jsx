import React from 'react'

const GetInTouch = () => {
  return (
    <>
      <section className='connect'>
        <video
          controls
          autoPlay
          muted
          loop
          poster='./images/project-4.jpeg'
          className='video-container'
        >
          {/* <!-- <source src="./videos/connect.mp4" type="video/mp4" /> --> */}
          Sorry, your browser doesn't support embedded videos.
        </video>
        <div className='video-banner'>
          <div className='section-title'>
            <h2>let's get in touch</h2>
            <div className='underline'></div>
          </div>
          <p className='video-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui quam exercitationem
            consequuntur facere hic magni voluptatum animi maiores corporis. Consectetur eaque sed
            perferendis numquam accusamus facere magni cumque odit?
          </p>
          <a href='contact.html' className='btn'>
            contact me
          </a>
        </div>
      </section>
    </>
  )
}

export default GetInTouch
