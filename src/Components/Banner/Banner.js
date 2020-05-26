import React from 'react';
import './Banner.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="intro-overlay"></div>
                <div className="intro">
                    <h5>Hello, World</h5>
                    <h1>I'm MD.RAHMATUZZAMAN</h1>
                    <p className="intro-position">
                        FRONT-END DEVELOPER
                       
                    </p> 
                   <button className="actionBtn"><a href="#about">More About Me</a></button>
                </div>
                <ul class="intro-social">        
                        <li><a href="https://github.com/sojib-bd/ema-john-simple"><GitHubIcon style={{fontSize: '30px'}}/></a></li>
                        <li><a href="https://github.com/sojib-bd/ema-john-simple"><LinkedInIcon style={{fontSize: '30px'}}/></a></li>
                        <li><a href="https://github.com/sojib-bd/ema-john-simple"><TwitterIcon style={{fontSize: '30px'}}/></a></li>
                        <li><a href="https://github.com/sojib-bd/ema-john-simple"><FacebookIcon style={{fontSize: '30px'}}/></a></li>
         
                 </ul>

            </section>
        </>
    );
};

export default Banner;