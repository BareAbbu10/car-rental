import React, { Component } from "react";


export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar container d-flex justify-content-between my-3">
        <div>
          <h2>Logo</h2>
        </div>
        <ul className="icons-navbar d-flex align-items-center">
          <li className="fadeIn links-nav">Home</li>
          <li className="fadeIn links-nav">About</li>
          <li className="fadeIn links-nav">Vehicle</li>
          <li className="fadeIn links-nav">Reviews</li>
          <li className="fadeIn links-nav">Our Team</li>
          <li className="fadeIn links-nav">Contact us</li>
        </ul>
        <div>
          <button type="button" className="btn sign-btn" style={{ fontWeight: "700" }}>
            Sign In
          </button>
          <button
            type="button"
            className="btn register-btn"
            style={{ fontWeight: "700" }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
