import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Group from '../components/Group'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Group />
    </div>
  )
}

export default Home