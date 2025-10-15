import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const About = () => {
    const h2ref=useRef()
    useGSAP(()=>{
        const titileSplit=new SplitText(h2ref.current,{
            type:'words',
     

        })
        // gsap.from(titileSplit.words, {
        //     yPercent: 300,
        //     duration: 1.8,
        //     ease: "expo.out",
        //     stagger: 0.06
        //   })
        const scrollTimeLine=gsap.timeline({
            scrollTrigger:{
                trigger:"#about",
                start:'top center'
            }
        })
        .from(titileSplit.words,{
            opacity:0,duration:1,yPercent:100,ease:"expo.out",stagger:0.02
        })
        .from(".top-grid div ,bottom-grid div ",{
            opacity:0,duration:1,ease:"power1.inOut",stagger:0.04
        },"-=0.5")

    })
    return (
        <div id='about'>
            <div className='mb-16 md:px-0 px-5'>
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'> best cocktails</p>
                        <h2 ref={h2ref}>
                            where every details matter - from muddle to garnish

                        </h2>

                    </div>
                    <div className='sub-content'>
                        <p>
                            sssssssssssssssssssssssssssssssssss
                        </p>

                    </div>
                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>4.5</span> /5
                        </p>
                        <p className='text-sm text-white-100'>
                            more than +10000 customers

                        </p>
                    </div>


                </div>
                <div className='top-grid'>
                    <div className='md:col-span-3 '>
                        <div className='noisy'>
                            <img src='/images/abt1.png' alt='grid-img-1' />


                        </div>

                    </div>
                    <div className='md:col-span-6 '>
                        <div className='noisy'>
                            <img src='/images/abt2.png' alt='grid-img-1' />


                        </div>

                    </div>
                    <div className='md:col-span-3 '>
                        <div className='noisy'>
                            <img src='/images/abt5.png' alt='grid-img-1' />


                        </div>

                    </div>
                    </div>
                    <div className='bottom-grid'>
                        <div className='md:col-span-8'>
                            <div className='noisy'>
                                <img src='/images/abt4.png'/>

                            </div>

                        </div>
                        <div className='md:col-span-4'>
                            <div className='noisy'>
                                <img src='/images/abt3.png'/>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

       
    )
}

export default About
