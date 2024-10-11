import React from "react";

import HeroSection from "../components/HeroSection";
import Container from "../components/Container";
import CustomerExperience from "../components/CustomerExperience";
import ArticlesSection from "../components/Articles";
import PartnersSection from "../components/PartnersSection";
import OurServices from "../components/OurServices";

const HomePage = () => {
  return (
    <main className="bg-slate-200">
      <Container>
        <HeroSection />
        <CustomerExperience/>
        <PartnersSection/>
        <ArticlesSection/>
        <OurServices/>
      </Container>
    </main>
  );
};

export default HomePage;
