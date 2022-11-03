import React from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
