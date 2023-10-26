import React, { Component } from "react";
import '../Styles/Navbar.css';
import "../Styles/Navbar-responsive.css"

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isSignInVisible: false, // Start with the menu hidden
      NavHeight: "40px",
      isSmallScreen: window.innerWidth <= 1020,
    };
  }

  toggleSignInVisibility = () => {
    this.setState((prevState) => ({
      isSignInVisible: !prevState.isSignInVisible,
      NavHeight: prevState.isSignInVisible ? "40px" : "40vh",
    }));
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isSmallScreen = window.innerWidth <= 1020;
    this.setState({ isSmallScreen });
    if (isSmallScreen) {
      this.setState({
        isSignInVisible: false, // Hide the menu on smaller screens
        NavHeight: "40px",
      });
    }
  };

  render() {
    const isSmallScreen = this.state.isSmallScreen;
    const isSignInVisible = this.state.isSignInVisible;

    return (
      <section className="Navbar-Section">
        <div className="Navbar container d-flex justify-content-between my-3" style={{ height: this.state.NavHeight }}>
          <div>
            <h1 style={{ margin: "auto" }}>Logo</h1>
          </div>
          <ul className="icons-navbar d-flex" style={{ visibility: !isSmallScreen || isSignInVisible ? "visible" : "hidden" }} id="icon-navbar">
            <li className="fadeIn links-nav">Home</li>
            <li className="fadeIn links-nav">About</li>
            <li className="fadeIn links-nav">Vehicle</li>
            <li className="fadeIn links-nav">Reviews</li>
            <li className="fadeIn links-nav">Our Team</li>
            <li className="fadeIn links-nav">Contact us</li>
          </ul>
          <div>
            <button
              type="button"
              className="btn sign-btn"
              style={{ fontWeight: "700", visibility: !isSmallScreen || isSignInVisible ? "visible" : "hidden" }}
            >
              Sign In
            </button>
            <button
              type="button"
              className="btn register-btn"
              style={{
                fontWeight: "700",
                visibility: !isSmallScreen || isSignInVisible ? "visible" : "hidden",
              }}
            >
              Register
            </button>
          </div>
          <div className="hamburger" onClick={this.toggleSignInVisibility}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </section>
    );
  }
}
