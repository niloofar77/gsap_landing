import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const videoref = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useGSAP(() => {
    const herosplit = new SplitText(titleRef.current, { type: 'chars,words' })
    const paragraphsplit = new SplitText(subtitleRef.current, { type: 'lines' })

    herosplit.chars.forEach((char) => char.classList.add("text-gradient"))

    gsap.from(herosplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06
    })

    gsap.from(paragraphsplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    .to('.right-leaf', { y: 200 }, 0)
    .to('.left-leaf', { y: -200 }, 0)

    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120% top' : 'bottom top'

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoref.current,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true
      }
    })

    videoref.current.onloadedmetadata = () => {
      tl.to(videoref.current, {
        currentTime: videoref.current.duration
      })
    }
  }, [])

  return (
    <>
      <section id='hero' className='noisy'>
        <h1 ref={titleRef} className='title'>MOJITO</h1>
        <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf' />
        <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf' />
        <div className='body'>
          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p>cool crisp classic</p>
              <p ref={subtitleRef} className='subtitle'>
                sip the spirit <br /> of summer
              </p>
            </div>
            <div className='view-cocktails'>
              <p className='subtitle'>ddddd</p>
              <a href='#cooktails'>View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className='video absolute inset-0'>
        <video
          src='/videos/input.mp4'
          ref={videoref}
          muted
          playsInline
          preload='auto'
        ></video>
      </div>
    </>
  )
}

export default Hero
