import React from 'react';
import './ProjectCart.css';

const ProjectCart = (props) => {
    const { image, title } = props
    return (
        <div className="imageContainer">
            <img src={image} alt="" class="image1" />
            <div className="middle">
                <div className="text">{title}</div>
            </div>
        </div>
    );
};

export default ProjectCart;