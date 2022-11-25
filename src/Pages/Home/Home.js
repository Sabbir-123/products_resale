import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import TrustedClients from './TrustedClients/TrustedClients';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <TrustedClients></TrustedClients>
        </div>
    );
};

export default Home;