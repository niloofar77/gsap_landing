import { useGSAP } from '@gsap/react'
import React from 'react'

const Hero = () => {
    useGSAP(()=>{
        const herosplit=new SplitText('.title',{ type: 'chars,words'})
        const paragraphsplit=new SplitText('.subtitle',{ type: 'lines'})

        herosplit.chars.forEach((char)=>char.classList.add("text-gradient"))

        gsap.from(herosplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.06
        })
        gsap.from(paragraphsplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06,
            delay:1
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:'top top',
                end:'bottom top',
                scrub:true
            }
        })
        .to('.right-leaf',{y:200},0)
        .to('.left-leaf',{y:-200},0)

    })
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>
                <img src='/images/hero-left-leaf.png'  alt='left-leaf' className='left-leaf' />
                <img src='/images/hero-right-leaf.png' alt='right-leaf'className='right-leaf' />
                <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>cool crisp classic</p>
                            <p className=' subtitle'>
                                sip  the spirit <br></br> of summer
                            </p>

                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                dddddd
                            </p>
                            <a href='#cooktails'>View Cooktails </a>

                        </div>

                    </div>

                </div>



            </section>
        </>
    )
}

export default Hero
