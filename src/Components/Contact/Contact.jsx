import React from "react";
import "./Contact.css";
import logo from "../images/logo.png";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagramSquare, FaPinterest } from "react-icons/fa";
import Roll from "react-reveal/Roll";
import Wobble from "react-reveal/Wobble";
import Rotate from "react-reveal/Rotate";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__container">
        <Roll top>
          <div className="contact__top">
            <img src={logo} alt="" />
          </div>
        </Roll>
        <Wobble>
          <div className="contact__middle">
            Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
            typesetting industry Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s when an unknown printer took a
            galley of type and scrambled it to make a type specimen book it has
          </div>
        </Wobble>
        <ul className="contact__bottom">
          <Rotate top left>
            <li>
              <FiFacebook id="fa" />
            </li>
          </Rotate>
          <Rotate top right>
            <li>
              <FiTwitter id="fa" />
            </li>
          </Rotate>
          <Rotate bottom left>
            <li>
              <FaPinterest id="fa" />
            </li>
          </Rotate>
          <Rotate bottom right>
            <li>
              <FaInstagramSquare id="fa" />
            </li>
          </Rotate>
        </ul>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default Contact;
