import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "./Components/AboutSection";
import HeaderSection from "./Components/HeaderSection";
import Footer from "./Footer";

function About(){
    return(
        <>
        <HeaderSection/>
        <AboutSection/>
        <Footer/>
        </>
    )
}

export default About;