import React from 'react';
import './MyWorks.css'
import { Link } from "react-router-dom";

import image1 from './ProjectImages/ema-jhon.png';
import image2 from './ProjectImages/panda.png';
import image3 from './ProjectImages/doctor.png';
import image4 from './ProjectImages/bank.png';
import image5 from './ProjectImages/game.png';
import ProjectCart from './ProjectCart';

const MyWorks = () => {
    return (
        <div className="workContainer">
            <div className="projectIntro">
                <h5>PORTFOLIO</h5>
                <h3>Checkout Some of My Work</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam ex ad at animi, ullam fuga. Maiores doloremque molestiae eaque provident eligendi commodi minus natus non illum adipisci, ab vero!</p>
            </div>
            <div className="imageHolder">
                <ProjectCart
                    image={image1}
                    title="Ema-john-simple"
                />
                <ProjectCart
                    image={image2}
                    title="Panda-commerce"
                />
                <ProjectCart
                    image={image3}
                    title="Doctor's Portal"
                />
                <ProjectCart
                    image={image4}
                    title="Pioneer Bank"
                />
                <ProjectCart
                    image={image5}
                    title="Pig Game"
                />
            </div>
            <Link to='/projects'><button className="projectBtn">PROJECT DETAILS</button></Link>
        </div>

    );
};

export default MyWorks;