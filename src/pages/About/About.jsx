import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DeliverySection from "./DeliverySection";
import TeamMate from "./TeamMate";
import ClientTestimonial from "./ClientTestimonial";
import NewsletterSubscribe from "../../Components/NewsletterSubscribe ";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>EcoBazar Shopping | About </title>
      </Helmet>

      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <div className="container mx-auto">
        <DeliverySection></DeliverySection>
        <TeamMate></TeamMate>
        <ClientTestimonial></ClientTestimonial>
        <NewsletterSubscribe></NewsletterSubscribe>
      </div>
    </>
  );
};

export default About;
