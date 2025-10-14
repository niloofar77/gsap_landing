
import './App.css'
import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
    <>
     
  <main>
    <Navbar></Navbar>
    <Hero></Hero>
    <div className='h-dvh bg-black'>
      
    </div>
  </main>
     
    </>
  )
}

export default App
