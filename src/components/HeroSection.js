import React, { Component } from "react";
import '../Styles/Hero.css';
import "../Styles/Hero-responsive.css"
import Bg from "../media/hero-bg.png";
import Car from "../media/Car-Hero-removebg-preview.png";

export default class HeroSection extends Component {
  render() {
    return (
      <section className="Hero-section">
      <div className="Hero-content d-flex container" id="Home">
        <img src={Bg} alt="BG" className="Hero-bg" />
        <div className="d-flex Hero-left">
          <h5 style={{ fontWeight: "700" }}>Plan your trip with us</h5>
          <h1 style={{ fontWeight: "800" }}>
            With <span>us</span> your trip remains problem-free.
          </h1>
          <p>
            Your dream cars at Unbeatable prices, unlimited miles, flexible
            pick-up options and much more.{" "}
          </p>
          <div className="btn-hero d-flex">
            <button className=" btn-Hero-1">
              <strong>Book Ride</strong> &nbsp;
              {
                <svg
                  fill="#ffffff"
                  width="18px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM17.737,8.824a1,1,0,0,1-.061,1.413l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.415-1.414l2.323,2.323,5.294-4.853A1,1,0,0,1,17.737,8.824Z"></path>
                  </g>
                </svg>
              }
            </button>
            <button className="btn-Hero-2 mx-3">
              <strong>Learn More</strong>
              {
                <svg
                  width="25px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              }
            </button>
          </div>
        </div>
        <div className="Hero-right align-items-center d-flex">
          <img style={{ width: "130%" }} src={Car} alt="YO" />
        </div>
      </div>
      </section>
    );
  }
}
