import React, { Component } from "react";
import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import PlanSection from "../components/PlanSection";
export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <BookingSection />
        <PlanSection/>
      </>
    );
  }
}
