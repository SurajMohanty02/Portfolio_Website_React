import React from "react";
import Box from "./Box";
import "./Services.css";
import Slide from "react-reveal/Slide";
const Services = () => {
  return (
    <div className="service" id="service">
      <div className="service__container">
        <Slide left cascade>
          <div className="service__top">
            <h4>SERVICES</h4>
            <h2>My Services</h2>

            <p>
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry Lorem Ipsum has been the industry's standard
              dummy text ever
            </p>

            <div className="border"></div>
          </div>
        </Slide>
        <div className="service__bottom">
          <Box />
        </div>
      </div>
    </div>
  );
};

export default Services;
