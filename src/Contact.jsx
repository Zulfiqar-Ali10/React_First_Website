import React from "react";
import { Link } from "react-router-dom";
import ContactSection from "./Components/ContactSection";
import Footer from "./Footer";
import HeaderSection from "./Components/HeaderSection";

function Contact(){
    return(
        <>
        <HeaderSection/>
        <ContactSection/>
        <Footer/>
        </>
    )
}

export default Contact;