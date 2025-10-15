import React, { useRef, useState } from 'react'
import { sliderLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const Menu = () => {
    const contentRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const total = sliderLists.length
    const goSlide = (index) => {
        const newIndex = (index + total) % total
        setCurrentIndex(newIndex)
    }
    const getCocktailAt = (indexoffset) => {
        return sliderLists[(currentIndex + indexoffset + total) % total]
    }
    const currentCooktail = getCocktailAt(0)
    const prevCooktail = getCocktailAt(-1)
    const nextCooktail = getCocktailAt(+1)

    useGSAP(() => {
        gsap.fromTo("#title", {opacity: 0}, { opacity: 1, duration: 1 });
        gsap.fromTo(".cocktail img ", {opacity: 0,xPercent:-100}, { xPercent:0,opacity:1,duration:1,ease:"power1.inOut" });
        gsap.fromTo(".details h2 ", {opacity: 0,yPercent:-100}, { yPercent:0,opacity:100,ease:"power1.inOut" });
        gsap.fromTo(".details p ", {opacity: 0,yPercent:-100}, { yPercent:0,opacity:100,ease:"power1.inOut" });
        gsap.fromTo("#m-left-leaf ", {opacity: 0,yPercent:-100}, { yPercent:0,opacity:100,ease:"power1.inOut" });
        gsap.fromTo("#m-right-leaf ", {opacity: 0,yPercent:-100}, { yPercent:0,opacity:100,ease:"power1.inOut" });




    }, [currentIndex])



    return (
        <section id='menu' arial-labelledby='menu-heading'>
            <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf' />
            <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf' />
            <h2 id='menu-heading' className='sr-only'>
                coocktail menu

            </h2>
            <nav className='cocktail-tabs' >
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <button
                            key={cocktail.id}
                            className={`${isActive ? "text-white border-white "
                                : "text-white/50 border-white/50"}`}
                            onClick={() => goSlide(index)}>
                            {cocktail.name}


                        </button>
                    )
                })}

            </nav>
            <div className='content'>
                <div className='arrow'>
                    <button className='text-left' onClick={() => goSlide(currentIndex - 1)}>
                        <span>{prevCooktail.name}</span>
                        <img src='/images/right-arrow.png' alt='right-arrow' aria-hidden="true" />

                    </button>
                    <button className='text-right' onClick={() => goSlide(currentIndex + 1)}>
                        <span>{nextCooktail.name}</span>
                        <img src='/images/left-arrow.png' alt='right-arrow' aria-hidden="true" />

                    </button> -
                </div>
                <div className='cocktail'>
                    <img src={currentCooktail.image} className='object-contain' />

                </div>
                <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p>Recipe for :</p>
                        <p id='title'>
                            {currentCooktail.name}
                        </p>
                    </div>
                    <div className='details'>
                        <h2>{currentCooktail.title}</h2>
                        <p>{currentCooktail.description}</p>

                    </div>

                </div>



            </div>


        </section>
    )
}

export default Menu
