import React from 'react';
import './BlogPost.css';

const BlogPost = (props) => {
    const { image, title, intro, link } = props;
    return (
        <div className="postContainer">
            <img src={image} alt="" />
            <div className="blog">
                <h5>{title}</h5>
                <p>{intro}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    );
};

export default BlogPost;