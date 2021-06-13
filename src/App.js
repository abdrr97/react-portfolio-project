import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/authContext'

// components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/Error'
// auth pages
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import Profile from './pages/Profile'
// private route
import PrivateRoute from './routes/PrivateRoute'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Sidebar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
            <PrivateRoute path='/profile' component={Profile} />

            <Route path='/log-in' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />

            <Route path='*' component={NotFound} />
          </Switch>

          <Footer />
        </Router>
      </AuthProvider>
    </>
  )
}
