import React from "react";
import Banner from "./Banner";
import ServiceHighlights from "./ServiceHighlights";
import FeatureProduct from "./FeatureProduct";
import TopCategories from "./TopCategories";
import Trusted from "./Trusted";
import Review from "./Review";
import CardSection from "./CardSection";
import BestSeller from "./BestSeller";
import LatestNews from "./LatestNews";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="container mx-auto">
        <ServiceHighlights></ServiceHighlights>
        <FeatureProduct></FeatureProduct>
        <TopCategories></TopCategories>
        <Trusted></Trusted>
      </div>
      <Review></Review>
      <div className="container mx-auto">
        <CardSection></CardSection>
        <BestSeller></BestSeller>
        <LatestNews></LatestNews>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
    </>
  );
};

export default Home;
