import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Project from './Project'
import Resume from './Resume'

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/resume' element={<Resume />}/>
    </Routes>
    </>
  )
}

export default AppRouter
