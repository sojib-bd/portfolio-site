import React from 'react';
import './Banner.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Banner = () => {
    return (
        <>
            <section className="banner" id ="home">
                <div className="intro-overlay"></div>
                <div className="intro">
                    <h5>Hello, World</h5>
                    <h1>I'm MD.RAHMATUZZAMAN</h1>
                    <p className="intro-position">
                        FRONT-END DEVELOPER
                       
                    </p> 
                   <button className="actionBtn"><a href="#about">More About Me</a></button>
                </div>
                <ul className="intro-social">        
                        <li><a href="https://github.com/sojib-bd" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: '30px'}} /></a></li>
                        <li><a href="https://www.linkedin.com/in/md-rahmatuzzaman-sojib-0791bb134/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{fontSize: '30px'}}/></a></li>
                        <li><a href="https://twitter.com/mdrahmatuzzaman" target="_blank" rel="noopener noreferrer"><TwitterIcon style={{fontSize: '30px'}}/></a></li>
                        <li><a href="https://web.facebook.com/rahmatuzzaman" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{fontSize: '30px'}}/></a></li>
         
                 </ul>

            </section>
        </>
    );
};

export default Banner;