import React from 'react';
import image1 from '../MyWorks/ProjectImages/ema-jhon.png';
import image2 from '../MyWorks/ProjectImages/panda.png';
import image3 from '../MyWorks/ProjectImages/doctor.png';
import image4 from '../MyWorks/ProjectImages/bank.png';
import image5 from '../MyWorks/ProjectImages/game.png';

import './Projects.css';
import { Link } from "react-router-dom";
import ProjectList from '../ProjectList/ProjectList';
import project1 from './ProjectDetails';
import { project2, project3, project4, project5 } from './ProjectDetails';


const Projects = () => {
    return (
        <div>
            <Link to="/home"><p>↩ <strong>Back to HOME Page</strong></p></Link>

            <h2 className="pageTitle">RECENT PROJECTS</h2>
            <div className="projectController">
                <ProjectList
                    image={image1}
                    title='Ema-John-simple'
                    info={project1}
                    link1="https://ema-john-simple-b5a2a.firebaseapp.com/"
                    link2="https://github.com/sojib-bd/ema-john-simple"
                />

                <ProjectList
                    image={image2}
                    title='Panda commerce'
                    info={project2}
                    link1="https://sojib-bd.github.io/panda-commerce/"
                    link2="https://github.com/sojib-bd/panda-commerce"
                />

                <ProjectList
                    image={image3}
                    title="Doctor's Portal"
                    info={project3}
                    link1="https://doctors-portal-6d883.firebaseapp.com/"
                    link2="https://github.com/sojib-bd/doctors-portal"
                />
                <ProjectList
                    image={image4}
                    title="Pioneer Bank"
                    info={project4}
                    link1="https://sojib-bd.github.io/pioneer-bank/"
                    link2="https://github.com/sojib-bd/pioneer-bank"
                />
                <ProjectList
                    image={image5}
                    title="Pig Game"
                    info={project5}
                    link1="https://sojib-bd.github.io/pig-game/"
                    link2="https://github.com/sojib-bd/pig-game"
                />


            </div>
        </div>
    );
};

export default Projects;