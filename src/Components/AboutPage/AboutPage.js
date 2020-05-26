import React from 'react';
import profilePic from './Images/profile_pic.png';
import './AboutPage.css';
import { Button } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <div className="aboutContainer" id="about">
            <div className="part1">
                <h1>ABOUT</h1>
                <h3>Let Me Introduce Myself</h3>

            </div>
            <div className="part2">
                <img src={profilePic} alt="" width="200" height="200" />
                <p>Electrical Engineer by certificate. | Passionate about programming.|
                Start my journey with Web development.| completed 20+ projects.|
                Have the ability to make <strong>e-commerce website</strong>, dynamic website,
                 Medical website,Banking related website.| Expertise in<strong> JavaScript and React</strong>.|
                 comfortable with <strong>node.js , Express.js ,Redux, MondoDB</strong>.
                </p>

            </div>
            <div className="profileContainer">
                <div className="profile">
                    <h2>PROFILE</h2>

                    <ul className="info-list">
                        <li>
                            <strong>Full Name:</strong>
                            <p>MD. RAHMATUZZAMAN</p>
                        </li>
                        <li>
                            <strong>Graduation</strong>
                            <p>Electrical and Electronic Engineering</p>
                        </li>
                        <li>
                            <strong>JOB</strong>
                            <p>FRONT-END DEVELOPER</p>
                        </li>
                        <li>
                            <strong>EMAIL</strong>
                            <p>sojibrahmatuzzaman@gmail.com</p>
                        </li>

                    </ul>
                </div>
                <div className="skills">
                    <h2>SKILLS</h2>

                    <ul className="skillList">
                        <li>
                            <p><strong>HTML5</strong></p>
                            <div className="meter">
                                <span style={{ width: '90%' }}></span>
                            </div>
                        </li><br />
                        <li>
                            <p><strong>CSS3</strong></p>
                            <div className="meter">
                                <span style={{ width: '85%' }}></span>
                            </div>
                        </li><br />
                        <li>
                            <p><strong>JAVASCRIPT</strong></p>
                            <div className="meter">
                                <span style={{ width: '95%' }}></span>
                            </div>
                        </li><br />
                        <li>
                            <p><strong>REACT</strong></p>
                            <div className="meter">
                                <span style={{ width: '80%' }}></span>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="resumeBtn">

                <Button variant="danger"><a href="https://drive.google.com/open?id=1ut7_RK7dnJrN7vCF3bPxxRFZ1oiFwWnb">DOWNLOAD CV</a></Button>
            </div>
        </div>
    );
};

export default AboutPage;