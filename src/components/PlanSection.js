import React, { Component } from "react";
import CarImg from "../media/vecteezy_documentation-vector-icon-design_25593128.jpg"
import CustomerService from "../media/service.jpg"
import HappyDriver from "../media/1656318.jpg"
export default class PlanSection extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="Plan-content">
            <div className="Plan-content-top">
              <h3>Trust us with your plan</h3>
              <h1> <strong>Quick & easy car booking</strong></h1>
            </div>
            <div className="Plan-content-bottom">
              <div>
               <img src={CarImg} alt="YURRR" width="120px" height="120px"></img>
                <h3><strong>Select your Ride</strong></h3>
                <p>
                  We offers a big range of vehicles  for all<br/> your driving needs.
                  We have the<br/> perfect car to meet your needs
                </p>
              </div>
              <div>
              <img src={CustomerService} alt="YURRR" width="120px" height="120px"></img>
                <h3><strong>Let us Contact you</strong></h3>
                <p>
                  Our knowledgeable and friendly operators will  finalize<br/> the
                  booking for you in no time <br/>so you can get on with your trip
                </p>
              </div>
              <div>
              <img src={HappyDriver} alt="YURRR" width="120px" height="120px"></img>
                <h3><strong>Happy Driving</strong></h3>
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
