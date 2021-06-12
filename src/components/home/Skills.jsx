import React from 'react'

const Skills = () => {
  return (
    <>
      <section class='skills section'>
        <div class='section-title'>
          <h2>skills</h2>
          <div class='underline'></div>
        </div>
        <div class='section-center skills-center'>
          <article>
            <h3>front end</h3>
            <div class='skill'>
              <p>HTML/CSS</p>
              <div class='skill-container'>
                <div class='skill-value'></div>
                <p class='skill-text'>50%</p>
              </div>
            </div>
            <div class='skill'>
              <p>javascript</p>
              <div class='skill-container'>
                <div class='skill-value value-70'></div>
                <p class='skill-text skill-text-70'>70%</p>
              </div>
            </div>
            <div class='skill'>
              <p>react</p>
              <div class='skill-container'>
                <div class='skill-value value-80'></div>
                <p class='skill-text skill-text-80'>80%</p>
              </div>
            </div>
          </article>
          <article>
            <h3>back end</h3>
            <div class='skill'>
              <p>node</p>
              <div class='skill-container'>
                <div class='skill-value'></div>
                <p class='skill-text'>50%</p>
              </div>
            </div>
            <div class='skill'>
              <p>PHP</p>
              <div class='skill-container'>
                <div class='skill-value value-70'></div>
                <p class='skill-text skill-text-70'>70%</p>
              </div>
            </div>
            <div class='skill'>
              <p>python</p>
              <div class='skill-container'>
                <div class='skill-value value-80'></div>
                <p class='skill-text skill-text-80'>80%</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Skills
