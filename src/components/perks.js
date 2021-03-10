import React from 'react';

import freedom from './assets/illustration-financial-freedom.svg'
import passion from './assets/illustration-passions.svg'
import lifestyle from './assets/illustration-lifestyle.svg'
import work from './assets/illustration-work-anywhere.svg'

import './css/perks.css'

const Perks = () => {
    return ( 
        <section className="perks">
            <div className="flexbox">

                <div className="passion">
                    <div className='image-box'>
                        <div className="image">
                            <img src={passion} alt="passion"/>
                        </div>
                    </div>
                    <div className= 'text'>
                    <h1>
                        Indulge your passions
                    </h1>
                    <p>
                        Your passions shouldn't be just for the weekend. 
                        Earn a living doing what you love
                    </p>
                    </div>
                </div>

                <div className="freedom">
                    <div className='image-box'>
                        <div className="image">
                            <img src={freedom} alt="freedom"/>
                        </div>
                    </div>
                    <div className= 'text'>
                        <h1>
                            Gain financial freedom
                        </h1>
                        <p>
                            Start making money work for you. 
                            There's nothing quite like earning while you sleep.
                        </p>
                    </div>
                </div>

                <div className="lifestyle">
                    <div className='image-box'>
                        <div className="image">
                            <img src={lifestyle} alt="passion"/>
                        </div>
                    </div>
                    <div className= 'text'>
                    <h1>
                        Choose your lifestyle
                    </h1>
                    <p>
                        Own your daily schedule. Fancy a lie-in? Go for it!
                        Take charge of your week.
                    </p>
                    </div>
                </div>

                <div className="work">
                    <div className='image-box'>
                        <div className="image">
                            <img src={work} alt="passion"/>
                        </div> 
                    </div>
                    <div className= 'text'>
                    <h1>
                        Work from anywhere
                    </h1>
                    <p>
                        Selling online means not being pinned down. Want to work
                        AND travel? Go for it!
                    </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
//23.9375
 
export default Perks;