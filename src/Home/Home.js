import React from 'react';
import Banner from '../Banner/Banner';
import Contacts from '../Contact/Contacts';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Project></Project>
        <Contacts></Contacts>
        </div>
    );
};

export default Home;