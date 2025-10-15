
import './App.css'
import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cockatils from './components/Cockatils'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
    <>
     
  <main>
    <Navbar></Navbar>
    <Hero></Hero>
    <Cockatils></Cockatils>

  </main>
     
    </>
  )
}

export default App
