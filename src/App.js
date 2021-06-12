import React from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Projects from './pages/Projects'

export const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <Home /> */}
      {/* <About /> */}
      <Projects />
      <Footer />
    </>
  )
}
