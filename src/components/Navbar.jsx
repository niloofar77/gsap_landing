import { useGSAP } from '@gsap/react'
import React from 'react'
useGSAP(()=>{
    const navTweeen=gsap.timeline({
        scrollTrigger:{
            trigger:"nav",
            start:"bottom top"
        }
    });
    navTweeen.fromTo('nav',{backgroundColor:"transparent"},{
        backgroundColor:"#00000050",
        backgroundFilter:"blur(10px)",
        duration:1,
        ease:"power1.inOut"

    })
})
const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
            <a href='#home' className='flex items-center gap-2'>
                <img src='/image/logo.png'></img>
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                <li key={link.id}>
                    <a href={`#${link.id}|`}>
                        {link.title}
                    </a>
                </li>
                ))}
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
