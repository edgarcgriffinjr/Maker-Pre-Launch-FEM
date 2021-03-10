import React from 'react';

import './css/signup.css'

const Signup = () => {
    return ( 
        <section className="signup">
            <div className="signup-header">
                <h1>
                    Get notified when we launch
                </h1>
            </div>

            <form className="signup-form">
                    <input type="email" placeholder='Email Address'/>
                <button type="submit"> Get Notified </button>
            </form>
        </section>
     );
}
 
export default Signup;