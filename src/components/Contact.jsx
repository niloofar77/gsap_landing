import React from 'react'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap, { SplitText } from 'gsap/all'

const Contact = () => {

    useGSAP(()=>{
        const titileSplit=SplitText.create("#contact h2",{type:"word"});
        const timeline=gsap.timeline({
            scrollTrigger:{
                trigger:"#contact",
                start:"top center"
            },
            ease:"power1.inOut"
            
            
            
        })

        timeline
        .from(titileSplit.words,{
            opacity:0,yPercent:100,stagger:0.02
        })
        .from("#contact h3 , #contact p",{
            opacity:0,yPercent:100,stagger:0.02
        })
        .to("#f-right-leaf",{
            y:-50,duration:1,ease:"power1.inOut"
        } )
        .to("#f-left-leaf",{
            y:-50,duration:1,ease:"power1.inOut"
        },"<" )


    })
  return (
    <footer id='contact'>
      <img src='/images/footer-right-leaf.png' id='f-right-leaf'/>
      <img src='/images/footer-left-leaf.png' id='f-left-leaf'/>
      <div className='content'>
        <h2>where to find us </h2>
        <div>
            <h3>csssssssssssss</h3>
            <p>adress</p>
        </div>
        <div>
            <h3>contact us</h3>
            <p>021338838383838</p>
            <p>sn.mousavi77@gmail.com</p>

        </div>
        <div>
            <h3>open every day</h3>
            {
                openingHours.map((time)=>(
                    <p key={time.day}>

                        {time.day}:{time.time}
                    </p>
                ))
            }


        </div>

        <div>
            <h3>socialsss</h3>
            <div className='flex-center gap-5 '>
                {socials.map((social)=>(
                    <a key={social.name} href={social.url} target='_blank' aria-label={social.name}>

                                    <img src={social.icon} />
                    </a>

                ))}

            </div>
        </div>



        

 </div>


    </footer>
  )
}

export default Contact
