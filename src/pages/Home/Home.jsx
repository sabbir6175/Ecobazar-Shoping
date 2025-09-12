import React from 'react';
import Banner from './Banner';
import ServiceHighlights from './ServiceHighlights';
import FeatureProduct from './FeatureProduct';
import TopCategories from './TopCategories';
import Trusted from './Trusted';

const Home = () => {
    return (
       <>
            <Banner></Banner>
            <ServiceHighlights></ServiceHighlights>
            <FeatureProduct></FeatureProduct>
            <TopCategories></TopCategories>
            <Trusted></Trusted>
       </>
    );
};

export default Home;