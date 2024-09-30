import React from "react";
import { Link } from "react-router-dom";
import HeaderSection from "./Components/HeaderSection";
import Footer from "./Footer";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import SliderSection from "./Components/SliderSection";
import ContactSection from "./Components/ContactSection";
import FooterSection from "./Components/FooterSection";
import BannerSection from "./Components/BannerSection";


function Home(){
    return(
        <>
        <HeaderSection/>
        <BannerSection/>
        <AboutSection />
        <ServicesSection />
        <SliderSection/>
        <ContactSection/> 
        <FooterSection/>
        </>
    )
}

export default Home;