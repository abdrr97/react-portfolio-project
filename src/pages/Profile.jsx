import React from 'react'
import UpdateProfile from './auth/UpdateProfile'

const Profile = () => {
  return (
    <>
      <section className='login'>
        <div className='section-title'>
          <h1>Profile</h1>
          <div className='underline'></div>
        </div>
        <UpdateProfile />
      </section>
    </>
  )
}

export default Profile
