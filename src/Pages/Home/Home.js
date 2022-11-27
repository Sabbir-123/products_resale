import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import TrustedClients from './TrustedClients/TrustedClients';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement></Advertisement>
            <TrustedClients></TrustedClients>
        </div>
    );
};

export default Home;