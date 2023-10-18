import React, { Component } from "react";
import '../Styles/Booking.css';
import { IconCalendarEvent } from "@tabler/icons-react";
import { IconCar } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";

export default class BookingSection extends Component {
  constructor() {
    super();
    this.state = {
      pickTime: "",
      dropTime: "",
      CarType: "",
      dropOff: "",
      errorMsg: "none",
      pickUp: "",
    };
  }
  handleDrop = (e) => {
    this.setState({ dropOff: e.target.value });
  };
  handlePick = (e) => {
    this.setState({ pickUp: e.target.value });
  };

  handleCar = (e) => {
    this.setState({ CarType: e.target.value });
    // setCarImg(e.target.value);
  };
  handlePickTime = (e) => {
    this.setState({ pickTime: e.target.value });
  };
  handleDropTime = (e) => {
    this.setState({ dropTime: e.target.value });
  };

  updateErrorMsg() {
    if (
      this.state.pickTime === "" ||
      this.state.dropTime === "" ||
      this.state.CarType === "" ||
      this.state.dropOff === ""
    ) {
      this.setState({ errorMsg: "flex" });
    } else {
      this.setState({ errorMsg: "none" });
    }
  }
  handleButtonClick = (e) => {
    e.preventDefault();
    this.updateErrorMsg();
    setTimeout(() => {
      this.setState({ errorMsg: "none" });
    }, 2000);
  };

  render() {
    return (
      <section className="Booking-Section">
        <div className="Booking-box container">
          <div className="Booking-content-box">
            <div className="Booking-content">
              <h2>Book a Car</h2>
              <p
                className={`error-message ${
                  this.state.errorMsg === "none" ? "hidden" : ""
                }`}
              >
                Complete all Fields!
              </p>
              <form className="box-form" onSubmit={this.handleButtonClick}>
                <div className="box-form-fields">
                  <label>
                    <IconCar />
                    &nbsp;Select Your Car<b>*</b>
                  </label>
                  <select value={this.state.carType} onChange={this.handleCar}>
                    <option>Select Your Car</option>
                    <option>Honda Civic</option>
                    <option>Toyota Corolla</option>
                    <option>Suzuki Mehran</option>
                    <option>Honda City</option>
                    <option>Suzuki WagonR</option>
                  </select>
                </div>
                <div className="box-form-fields">
                  <label>
                    <IconMapPinFilled />
                    &nbsp;Pick Up Area<b>*</b>
                  </label>
                  <select value={this.state.pickUp} onChange={this.handlePick}>
                    <option>Pick Up Area</option>
                    <option>Johar Town</option>
                    <option>Hall Road</option>
                    <option>Lake City</option>
                    <option>Bahria Town</option>
                    <option>Model Town</option>
                  </select>
                </div>
                <div className="box-form-fields">
                  {" "}
                  <label>
                    {" "}
                    <IconMapPinFilled />
                    &nbsp;Drop Off Area<b>*</b>
                  </label>
                  <select value={this.state.dropOff} onChange={this.handleDrop}>
                    <option>Drop Off Area</option>
                    <option>Johar Town</option>
                    <option>Hall Road</option>
                    <option>Lake City</option>
                    <option>Bahria Town</option>
                    <option>Model Town</option>
                  </select>
                </div>
                <div className="box-form-fields box-form-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    className="date-picks"
                    id="picktime"
                    value={this.state.pickTime}
                    onChange={this.handlePickTime}
                    type="date"
                  ></input>
                </div>
                <div className="box-form-fields box-form-time">
                  {" "}
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <input
                    className="date-picks"
                    id="droptime"
                    value={this.state.dropTime}
                    onChange={this.handleDropTime}
                    type="date"
                  ></input>
                </div>
                <button className="Booking-btn" href="#" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
