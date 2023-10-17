import React, { Component } from "react";
import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import PlanSection from "../components/PlanSection";
import PickSection from "../components/PickSection";
import BannerSection from "../components/BannerSection";
import ChooseSection from "../components/ChooseSection";
import ReviewSection from "../components/ReviewsSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
export default class Home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <BookingSection />
        <PlanSection/>
        <PickSection/>
        <BannerSection/>
        <ChooseSection/>
        <ReviewSection/>
        <FaqSection/>
        <Footer/>
      </>
    );
  }
}
