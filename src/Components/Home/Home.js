import React from 'react';
import Banner from '../Banner/Banner';
import AboutPage from '../AboutPage/AboutPage';
import MyWorks from '../MyWorks/MyWorks';
import ContactInfo from '../ContactInfo/ContactInfo';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <AboutPage />
            <MyWorks />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Home;

