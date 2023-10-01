import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      signIn: "hidden",
      NavHeight: "",
    };
  }

  toggleSignInVisibility = () => {
    if (window.innerWidth <= 900) {
      this.setState((prevState) => ({
        signIn: prevState.signIn === "hidden" ? "visible" : "hidden",
        NavHeight: prevState.signIn === "hidden" ? "40vh" : "30px",
      }));
    }
  };

  componentDidMount() {
    // Add an event listener to track screen width changes
    window.addEventListener("resize", this.toggleSignInVisibility);

    // Initialize the state based on the initial screen width
    if (window.innerWidth > 900) {
      this.setState({
        signIn: "visible",
        NavHeight: "",
      });
    }
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("resize", this.toggleSignInVisibility);
  }

  render() {
    return (
      <section className="Navbar-Section">
        <div className="Navbar container d-flex justify-content-between my-3" style={{ height: this.state.NavHeight }}>
          <div>
            <h1 style={{ margin: "auto" }}>Logo</h1>
          </div>
          <ul className="icons-navbar d-flex" style={{ visibility: this.state.signIn }} id="icon-navbar">
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
              style={{ fontWeight: "700", visibility: this.state.signIn }}
            >
              Sign In
            </button>
            <button
              type="button"
              className="btn register-btn"
              style={{
                fontWeight: "700",
                visibility: this.state.signIn,
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

// Your CSS styles remain the same
