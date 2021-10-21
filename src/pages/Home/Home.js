import React from 'react'
import Services from '../Services/Services';
import Banner from './banner/Banner';
import ChooseUs from './choose/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
        </div>
    )
}

export default Home;
