import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/Error'

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Projects} />

          <Route path='*' component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    </>
  )
}
