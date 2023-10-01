import React, { Component } from "react";
import BG from "../media/main.png";
import { IconCoin } from "@tabler/icons-react";
import { IconEyeDollar } from "@tabler/icons-react";
import Siren from "../media/police-car-light-svgrepo-com.svg";

export default class ChooseSection extends Component {
  render() {
    return (
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img src={BG} className="img-choose" height="500" width="1100" alt="YURRR"></img>
            <div className="text-choose-container d-flex">
              <div className="text-choose-left">
                <h4>Why Choose Us</h4>
                <h1>Best valued deals you will ever find</h1>
                <p>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <button>Find Details &rarr;</button>
              </div>
              <div className="text-choose-right">
                <div className="text-choose-right-box d-flex">
                  <img src={Siren} height="100px" width="60px" alt="Siren" className="siren"></img>
                  <div className="text-choose-right-box-text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures
                    </p>
                  </div>
                </div>
                <div className="text-choose-right-box d-flex">
                  <IconCoin height="100px" width="120px"/>
                  <div className="text-choose-right-box-text">
                    <h4>All Inclusive pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy
                    </p>
                  </div>
                </div>
                <div className="text-choose-right-box d-flex">
                  <IconEyeDollar height="100px" width="120px"/>
                  <div className="text-choose-right-box-text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
