import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/authContext'

// components
import { Navbar, Sidebar, Footer } from './components'
// pages
import { Home, About, Projects, Contact, NotFound, Profile } from './pages'
// auth pages
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
// private route
import PrivateRoute from './routes/PrivateRoute'
import { PortfolioProvider } from './context'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <PortfolioProvider>
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
        </PortfolioProvider>
      </AuthProvider>
    </>
  )
}
