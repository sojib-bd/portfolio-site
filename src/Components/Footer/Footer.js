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
                    <li><GitHubIcon /></li>
                    <li><LinkedInIcon /></li>
                    <li><TwitterIcon /></li>
                    <li><FacebookIcon /></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;