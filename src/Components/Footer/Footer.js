import React from 'react';
import './Footer.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="copyright">
                <p> © Copyright 2020 | Design By MD.RAHMATUZZAMAN</p>
            </div>
            <div className="social-link">
                <ul>
                    <li><a href="https://github.com/sojib-bd" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a></li>
                    <li><a href="https://www.linkedin.com/in/md-rahmatuzzaman-sojib-0791bb134/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a></li>
                    <li><a href="https://twitter.com/mdrahmatuzzaman" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a></li>
                    <li><a href="https://web.facebook.com/rahmatuzzaman" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;