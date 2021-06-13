import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../../context'
import { TimeLine as TimelineComp } from '../../components/home'

const Timeline = () => {
  const { addTimeline } = useContext(PortfolioContext)
  const [year, setYear] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const timeline = {
      year,
      desc,
    }

    addTimeline(timeline)
    setYear('')
    setDesc('')
  }

  return (
    <>
      <TimelineComp />

      <form onSubmit={(e) => handleSubmit(e)} className='timeline-form'>
        <div className='timeline'>
          <label htmlFor='timeline-year'>Year</label>
          <input
            value={year}
            onChange={({ target }) => setYear(target.value)}
            type='number'
            id='timeline-year'
          />
        </div>
        <div className='timeline'>
          <label htmlFor='timeline-desc'>Description</label>
          <textarea
            value={desc}
            onChange={({ target }) => setDesc(target.value)}
            id='timeline-desc'
            rows='15'
          ></textarea>
        </div>
        <button className='btn'> Add to Timeline</button>
      </form>
    </>
  )
}

export default Timeline
