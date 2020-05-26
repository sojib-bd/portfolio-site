import React from 'react';
import './ProjectList.css';

const ProjectList = (props) => {
    const { image, title, info, link1, link2 } = props
    return (
        <>
            <div className="project">
                <img src={image} alt="" width="300" />
                <div className="projectInfo">
                    <h4>{title}</h4>
                    <p>Details:-</p>
                    <ol>
                        {info.map(x => <li>{x}</li>)}
                    </ol>
                    <p><strong>Live Link= </strong><a href={link1}>{title}</a></p>
                    <p><strong>GitHub Link = </strong><a href={link2}>GitHub</a></p>
                </div>
            </div><hr />
        </>

    );
};

export default ProjectList; 