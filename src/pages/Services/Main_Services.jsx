import React from "react";
import Footer from "./Footer_Section/Footer";
import Hero_Servicess from "./Heros_Section/Hero_Services";

import Features from "./Features_Section/Features";
import Visiblity from "./Visiblity_Features/Visiblity";
import BlogCard from "../Services/Features_Section/Features_Blog/BlogCard"
import Contact from "./Contact/Contact";




const Main_Services = () => {
  return (
<>

<Hero_Servicess/>

<Features/>

<Visiblity/>

<BlogCard/>


<Contact/>
<Footer />



</>
  
  );
};

export default Main_Services;