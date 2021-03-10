import React from 'react';

import './css/pricing.css'
import freelogo from './assets/icon-free.svg'
import paidlogo from './assets/icon-paid.svg'

const Pricing = () => {
    const free = ['Unlimited products', 'Basic analytics', 
                    'Limited marketplace exposure', '10% fee per transaction']

    const paid = ['Custom domain', 'Adavanced analytics and reports',
                    'High marketplace visibilty', '5% fee per transaction']
    return ( 
        <section className="pricing">
            <div className="heading">
                

                <h1>
                    Our pricing plans
                </h1>

                <p>
                    We only make money when our creators make money. Our plans are always
                    affordable, and it's completely free to get started
                </p>
                
            </div>

            <div className="boxes">
                
                <div className="free">
                    <div className="logo-free">
                        <img src={freelogo} alt="free"/>
                    </div>

                    <div className="content-grid-free">
                        <h1> Dip your toe</h1>

                    <p> 
                        Just getting started? No problem at all! Our free plan will take you 
                        a long way.
                    </p>

                    <h2> Free</h2>

                    <ul>
                        {free.map((item) => {
                            return(
                                <li>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </div>

                
                <div className="paid">
                    <div className='logo-paid'>
                       <img src={paidlogo} alt="paid"/> 
                    </div>
                    
                    <div className="content-grid-paid">
                        <h1>Dive right in</h1>

                        <p> 
                            Ready for the big time? Our paid plan will help you take your
                            business to the next level.
                        </p>

                        <h2>$25.00 <span> / month</span></h2>

                        <ul>
                            {paid.map((item) => {
                                return(
                                    <li>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default Pricing;