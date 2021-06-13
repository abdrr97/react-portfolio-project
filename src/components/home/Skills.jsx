import React, { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '../../context'
import { AuthContext } from '../../context/authContext'

const Skills = () => {
  const { currentUser } = useContext(AuthContext)
  const { skills, removeSkill, loading } = useContext(PortfolioContext)
  const [frontEndSkills, setFrontEndSkills] = useState([])
  const [backEndSkills, setBackEndSkills] = useState([])

  useEffect(() => {
    const frontSkills = skills.filter((skill) => skill.type === 'front-end')
    const backSkills = skills.filter((skill) => skill.type === 'back-end')

    setFrontEndSkills(frontSkills)
    setBackEndSkills(backSkills)
  }, [skills])

  return (
    <>
      {skills.length > 0 && (
        <section className='skills section'>
          <div className='section-title'>
            <h2>skills</h2>
            <div className='underline'></div>
          </div>
          <div className='section-center skills-center'>
            <article>
              <h3>front end</h3>

              {!loading &&
                frontEndSkills.map(({ docId, language, persent }) => {
                  return (
                    <div key={docId} className='skill'>
                      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {language}
                        {currentUser && (
                          <button onClick={() => removeSkill(docId)} className='btn'>
                            x
                          </button>
                        )}
                      </p>
                      <div className='skill-container'>
                        <div className='skill-value' style={{ width: persent + '%' }}></div>
                        <p className='skill-text'>{persent}%</p>
                      </div>
                    </div>
                  )
                })}
            </article>
            <article>
              <h3>back end</h3>
              {!loading &&
                backEndSkills.map(({ docId, language, persent }) => {
                  return (
                    <div key={docId} className='skill'>
                      <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {language}
                        {currentUser && (
                          <button onClick={() => removeSkill(docId)} className='btn'>
                            x
                          </button>
                        )}
                      </p>
                      <div className='skill-container'>
                        <div className='skill-value' style={{ width: persent + '%' }}></div>
                        <p className='skill-text'>{persent}%</p>
                      </div>
                    </div>
                  )
                })}
            </article>
          </div>
        </section>
      )}
    </>
  )
}

export default Skills
