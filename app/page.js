import React from "react";
import Home from "./components/landing/Home";
import ServicesSection from "./components/landing/Services";
import HowItWorksSection from "./components/landing/HowItWorks";
import GlobalReachSection from "./components/landing/GlobalReach";
import LovedByCustomers from "./components/landing/LovedByCustomers";

export default function page() {
  return (
    <>
      <Home />
      <ServicesSection />
      <HowItWorksSection />
      <GlobalReachSection />
      <LovedByCustomers />
    </>
  );
}
