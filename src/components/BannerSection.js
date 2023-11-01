import React, { Component } from "react";
import '../Styles/Banner.css';

export default class BannerSection extends Component {
  render() {
    return (
      <section className="Banner-section" id="Banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content-text">
              <h2>Save big with our cheap car rental!</h2>
              <p>
                Top Airports. Local Suppliers. <span>24/7</span> Support.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
