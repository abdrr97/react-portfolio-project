import React, { useContext } from 'react'
import { PortfolioContext } from '../../context'
import { AuthContext } from '../../context/authContext'

const TimeLineSection = () => {
  const { timelines, loading, removeTimeline } = useContext(PortfolioContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <>
      <section className='section '>
        <div className='section-title'>
          <h2>timeline</h2>
          <div className='underline'></div>
        </div>
        {loading && <h1>loading ....</h1>}

        <div className='section-center timeline-center'>
          {!loading &&
            timelines.map(({ docId, year, desc }, idx) => {
              return (
                <article key={docId} className='timeline-item'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <h4>{year}</h4>
                    {currentUser && (
                      <button onClick={() => removeTimeline(docId)} className='btn'>
                        x
                      </button>
                    )}
                  </div>
                  <p>{desc}</p>
                  <span className='number'>{idx + 1}</span>
                </article>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default TimeLineSection
