import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../../context'
import { Skills as SkillsComp } from '../../components/home'
const Skills = () => {
  const { addSkill } = useContext(PortfolioContext)
  const [language, setLanguage] = useState('')
  const [present, setPresent] = useState(50)
  const [type, setType] = useState('front-end')

  const handleSubmit = (e) => {
    e.preventDefault()

    const skills = {
      language,
      present,
      type,
    }

    addSkill(skills)

    setLanguage('')
    setPresent('')
    setType('')
  }

  return (
    <>
      <SkillsComp />

      <form onSubmit={(e) => handleSubmit(e)} className='timeline-form'>
        <div className='timeline'>
          <label htmlFor='timeline-language'>Language</label>
          <input
            value={language}
            onChange={({ target }) => setLanguage(target.value)}
            type='text'
            id='timeline-language'
          />
        </div>
        <div className='timeline'>
          <label htmlFor='timeline-present'>Present {present}%</label>
          <input
            value={present}
            onChange={({ target }) => setPresent(target.value)}
            type='range'
            min='0'
            max='100'
            id='timeline-present'
          />
        </div>
        <div className='timeline'>
          <label htmlFor='timeline-type'>Type</label>
          <select id='timeline-type'>
            <option value='front-end'>Front end</option>
            <option value='back-end'>Back end</option>
          </select>
        </div>
        <button className='btn'> Add to Timeline</button>
      </form>
    </>
  )
}

export default Skills
