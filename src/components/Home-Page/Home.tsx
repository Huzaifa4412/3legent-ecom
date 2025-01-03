import React from "react";
import NotificationBar from "./NotificationBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BannerGrid from "./BannerGrid";
import OurFeatures from "./OurFeatures";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Footer from "../Footer";
import Card from "../Card";
import FeaturesSection from "./FeaturesSection";
// import Article from "./Article";

const Home = () => {
  return (
    <div>
      <NotificationBar />
      <Navbar />
      <Hero />
      <BannerGrid />
      <Card />
      <FeaturesSection />
      <OurFeatures />
      <Banner />
      {/* <Article /> */}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
