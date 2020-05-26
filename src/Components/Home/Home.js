import React from 'react';
import Banner from '../Banner/Banner';
import AboutPage from '../AboutPage/AboutPage';
import MyWorks from '../MyWorks/MyWorks';
import ContactInfo from '../ContactInfo/ContactInfo';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutPage />
            <MyWorks />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Home;

