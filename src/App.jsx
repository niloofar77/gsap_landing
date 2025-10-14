
import './App.css'
import React from 'react'
import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {

  return (
    <>
      <h1 className='text-4xl font-bold'>Hello World</h1>

     
    </>
  )
}

export default App
