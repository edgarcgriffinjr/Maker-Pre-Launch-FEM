import React from 'react';

import heroleft from './assets/illustration-hero-left.svg'
import heroright from './assets/illustration-hero-right.svg'
import herotop from './assets/illustration-hero-mobile.png'
import mouse from './assets/icon-scroll.svg'

import './css/hero.css'


const Hero = () => {
    return ( 
        <section className="hero">
            <div className="grid">
                <div className="top">
                <img  src={herotop} alt="herotop" />

                </div>
                <div className='left'>
                    <img  src={heroleft} alt="heroleft" height='459px' width='408px' />
                </div>
                <div className='content'>
                    <h1 >
                        Get paid for the work you <span> love </span> to do.
                    </h1>
                    <p >
                        The 9-5 grind is so last century. We believe in living life on your own terms. 
                        Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.
                    </p>
                    <img src={mouse} alt=""/>
                </div>
                <div className='right'>
                    <img  src={heroright} alt="heroright" height='459px' width='408px'/>
                </div>
            </div>
        </section>
     );
}

export default Hero;