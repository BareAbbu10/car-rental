import React, { Component } from "react";
import '../Styles/Review.css';
import "../Styles/Review-responsive.css"
import { IconQuote } from "@tabler/icons-react";
import Messi from "../media/messi.jpg";
import joe from "../media/Joe.jpg";

export default class ReviewsSection extends Component {
  render() {
    return (
      <section className="Review-section" id="Review">
        <div className="container">
          <div className="Review-content">
            <div className="Review-content-top d-flex">
              <h4>Reviews by People</h4>
              <h1>Client's Reviews</h1>
              <p>
                Discover the positive impact we've made on our clients by
                reading through their<br/> reviews. our clients have experienced our
                service and results, and they're eager to share their positive
                experience with you.
              </p>
            </div>
            <div className="Review-content-bottom d-flex">
              <div className="Review-content-profile-card">
                <span className="quotes-icon">
                  <IconQuote />
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="Review-bottom-profile d-flex">
                  <img src={Messi} height="20px" width="20px" alt="Messi"></img>
                  <span>
                    <h4>Lionel Messi</h4>
                    <p>Churungi</p>
                  </span>
                </div>
              </div>
              <div className="Review-content-profile-card">
                <span className="quotes-icon">
                  <IconQuote />
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="Review-bottom-profile d-flex">
                  <img src={joe} height="20px" width="20px" alt="Messi"></img>
                  <span>
                    <h4>Joe Goldberg</h4>
                    <p>Chung</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
