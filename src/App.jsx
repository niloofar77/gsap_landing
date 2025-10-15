
import './App.css'
import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cockatils from './components/Cockatils'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
    <>
     
  <main>
    <Navbar></Navbar>
    <Hero></Hero>
    <Cockatils></Cockatils>
    <About></About>
    <Art></Art>
    <Menu></Menu>
  </main>
     
    </>
  )
}

export default App
