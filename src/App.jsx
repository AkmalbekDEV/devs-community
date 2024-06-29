import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aos from 'aos'
import Hire from './pages/Hire'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  });

  return (
    <div className='bg-[#080029] max-lg:px-10 py-2'>
      <div className='max-w-[1200px] m-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<Hire />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App