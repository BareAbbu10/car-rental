import React, { Component } from "react";

export default class PlanSection extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="Plan-content">
            <div className="Plan-content-top">
              <h3>Trust us with your plan</h3>
              <h2>Quick & easy car booking</h2>
            </div>
            <div className="Plan-content-bottom">
              <div>
                <h3>Select your Ride</h3>
                <p>
                  We offers a big range of vehicles  for all<br/> your driving needs.
                  We have the<br/> perfect car to meet your needs
                </p>
              </div>
              <div>
                <h3>Let us Contact you</h3>
                <p>
                  Our knowledgeable and friendly operators will  finalize<br/> the
                  booking for you in no time <br/>so you can get on with your trip
                </p>
              </div>
              <div>
                <h3>Happy Driving</h3>
                <p>
                  Long Trip Drive or just a day around the city with<br/> family,
                  we have got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
