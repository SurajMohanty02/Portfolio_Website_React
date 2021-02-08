import React from "react";
import "./Banner.css";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagramSquare, FaPinterest, FaPlay } from "react-icons/fa";
import man from "../images/man-01.png";
import Typical from "react-typical";
import LightSpeed from "react-reveal/LightSpeed";
import Rotate from "react-reveal/Rotate";
const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="banner__container">
        <div className="banner__left">
          <ul className="left__container">
            <Rotate top left>
              <li>
                <FiFacebook />
              </li>
            </Rotate>
            <Rotate top right>
              <li>
                <FiTwitter />
              </li>
            </Rotate>
            <Rotate bottom left>
              <li>
                <FaPinterest />
              </li>
            </Rotate>
            <Rotate bottom right>
              <li>
                <FaInstagramSquare />
              </li>
            </Rotate>
          </ul>
          <h1>
            <Typical
              steps={["Hello Friends", 1000, "I am Suraj Mohanty", 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <LightSpeed left>
            <p>
              A Professional web developer with long time experience in this
              field
            </p>
          </LightSpeed>
          <div className="buttons">
            <button className="btn_port">My Portfolio</button>
            <button className="btn_play">
              <FaPlay />
            </button>
          </div>
        </div>
        <div className="banner__right">
          <img src={man} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
