import React from 'react';
import profilePic from './Images/profile_pic.png';
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="aboutContainer" id="about">
            <div className="part1">
                <h1>ABOUT</h1>
                <h3>Let Me Introduce Myself</h3>

            </div>
            <div className="part2">
                <img src={profilePic} alt="" width="150" Height="150" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, dolor, itaque repudiandae enim possimus reiciendis ipsum quas nemo totam aspernatur, aliquid cumque fugiat iusto harum eligendi eos earum quasi expedita!</p>

            </div>
            <div className="profileContainer">
                <div className="profile">
                    <h3>PROFILE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo nisi ad doloremque, placeat accusamus iste qui quaerat necessitatibus, quis, eos consequatur? Eum repellat culpa commodi vitae odio eligendi maxime!</p>
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
                    <h3>SKILLS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, esse fugiat! Quis perferendis debitis quas atque fugit perspiciatis quibusdam distinctio autem quam, similique voluptatum quo enim, sequi vel iure delectus?</p>

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
                <button><a href="https://drive.google.com/open?id=1ut7_RK7dnJrN7vCF3bPxxRFZ1oiFwWnb">Download RESUME</a></button>
            </div>
        </div>
    );
};

export default AboutPage;