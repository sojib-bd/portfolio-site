import React from 'react';
import './MyWorks.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import image1 from './ProjectImages/ema-jhon.png';
import image2 from './ProjectImages/panda.png';
import image3 from './ProjectImages/doctor.png';
import ProjectCart from './ProjectCart';

const MyWorks = () => {
    return (
        <div className="workContainer" id="projects">
            <div className="projectIntro">
                <h2>PORTFOLIO</h2>
                <h5>CHECK OUT SOME OF MY PROJECTS</h5>
            </div>
            <div>
                <ProjectCart
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    title1="Ema-john-simple"
                    title2="Panda Commerce"
                    title3="Doctor's Portal"
                />
            </div>
            <div className="projectBtn">
                <Link to="/projects"> <Button variant="danger">PROJECT DETAILS</Button></Link>

            </div>
        </div>

    );
};

export default MyWorks;