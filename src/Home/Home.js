import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contacts from "../Contact/Contacts";
import Footer from "../Footer/Footer";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Project></Project>
      {/* <ProductDetail></ProductDetail> */}
      <Skill></Skill>
      <Blog></Blog>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
