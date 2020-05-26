import React from 'react';
import image1 from './BlogImages/image1.png';
import image2 from './BlogImages/image2.jpeg';
import image3 from './BlogImages/image3.jpeg';
import image4 from './BlogImages/image4.png';
import './BlogPage.css';
import BlogPost from '../BlogPost/BlogPost';
import { Link } from 'react-router-dom';
const BlogPage = () => {


    return (
        <div class="blogContainer">
            <Link to="/home">
                <p className="homeLink">↩ Back To Home Page</p>
            </Link>
            <h3>MY RECENT BLOGS IN MEDIUM</h3>
            <BlogPost
                image={image1}
                title="Synchronous Vs Asynchronous"
                intro="JavaScript is a single-threaded language. It can do only one task at a time. It is also a non-blocking language that means it works synchronously....."
                link="https://medium.com/@sojibrahmatuzzaman/synchronous-vs-asynchronous-javascript-4c20d75f9c9b"
            />
            <BlogPost
                image={image2}
                title="JavaScript Data Structure"
                intro="A data structure is a particular way of organizing and storing data in a computer so that it can be accessed and modified efficiently. More precisely, a data structure is a collection of data values....."
                link="https://medium.com/@sojibrahmatuzzaman/javascript-data-structure-8bbc099fc74d"
            />

            <BlogPost
                image={image3}
                title="5 core concepts of React."
                intro="Basically React Element is a plain JavaScript object which describes the DOM nodes or Components. ....."
                link="https://medium.com/@sojibrahmatuzzaman/5-core-concepts-of-react-517af0fcb294"
            />
            <BlogPost
                image={image4}
                title="Front-end Interview Preparation: React Interview question."
                intro="Getting the first job as a developer is sometimes really hard. We all want to be hired but lack of knowledge or experience sometimes we fall behind. ....."
                link="https://medium.com/@sojibrahmatuzzaman/front-end-interview-preparation-react-interview-question-a77ae2bcc55e"
            />

            <button className="blogBtn"><a href="https://medium.com/@sojibrahmatuzzaman"
                target="_blank" rel="noopener noreferrer"
            >READ MORE ARTICLES</a></button>

            <Link to="/home">
                <p className="homeLink2">↩ Back To Home Page</p>
            </Link>
        </div>
    );
};

export default BlogPage;