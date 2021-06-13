import React from 'react'
import { Link } from 'react-router-dom'

import PrivateRoute from '../routes/PrivateRoute'
import { Projects, UpdateProfile, Timeline, Skills } from './profile-info'

const Profile = () => {
  return (
    <>
      <section className='login'>
        <ul className='links'>
          <li>
            <Link className='link' to='/profile'>
              info
            </Link>
          </li>
          <li>
            <Link className='link' to='/profile/timeline'>
              timeline
            </Link>
          </li>
          <li>
            <Link className='link' to='/profile/skills'>
              skills
            </Link>
          </li>
          <li>
            <Link className='link' to='/profile/projects'>
              projects
            </Link>
          </li>
        </ul>

        {/* Handle Routing */}

        <PrivateRoute exact path='/profile'>
          <UpdateProfile />
        </PrivateRoute>
        <PrivateRoute path='/profile/timeline'>
          <Timeline />
        </PrivateRoute>
        <PrivateRoute path='/profile/skills'>
          <Skills />
        </PrivateRoute>
        <PrivateRoute path='/profile/projects'>
          <Projects />
        </PrivateRoute>
      </section>
    </>
  )
}

export default Profile
