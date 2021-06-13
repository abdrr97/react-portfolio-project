import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const UpdateProfile = () => {
  const { currentUser, updateEmail, updatePassword } = useContext(AuthContext)

  const [email, setEmail] = useState(currentUser.email)
  const [password, setPassword] = useState('')
  const [confirmPassowrd, setConfirmPassowrd] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const handleUpdateProfile = (e) => {
    e.preventDefault()

    if (password.trim() !== confirmPassowrd.trim()) {
      setPassword('')
      setConfirmPassowrd('')
      return setError('Passwords do not match 😭😭')
    }

    setIsLoading(true)
    setError('')
    const promises = []

    if (email !== currentUser.email) {
      promises.push(updateEmail(email))
    }

    if (password) {
      promises.push(updatePassword(password))
    }

    Promise.all(promises)
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        setError('Failed to update profile')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <div className='card'>
          <div className='card-body'>
            <div className='section-title'>
              <h3>Update Profile</h3>
            </div>

            <form action='' onSubmit={handleUpdateProfile}>
              {error && <div className='alert alert-danger'>{error}</div>}

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  id='email'
                  name='email'
                  type='email'
                  placeholder='email goes here '
                  value={email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Leave it empty to keep the same'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password-confirmation'>Password Confirmation</label>
                <input
                  value={confirmPassowrd}
                  onChange={(event) => setConfirmPassowrd(event.target.value)}
                  id='password-confirmation'
                  name='password-confirmation'
                  type='password'
                  placeholder='Leave it empty to keep the same'
                />
              </div>

              <button
                disabled={isLoading}
                type='submit'
                className='btn'
                style={{ margin: '0 10px 0 0' }}
              >
                {isLoading ? 'loading ... ' : 'Update Profile'}
              </button>
              <Link className='btn' to='/'>
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile
