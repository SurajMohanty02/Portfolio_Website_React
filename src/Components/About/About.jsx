import React from "react";
import "./About.css";
import man from "../images/man-01.png";
import Rotate from "react-reveal/Rotate";
import Roll from "react-reveal/Roll";
const About = () => {
  const data = [
    { id: 1, title: "Name", data: "Suraj Mohanty" },
    { id: 2, title: "Email", data: "surajmohanty02@gmail.com" },
    { id: 3, title: "Phone", data: "9337131221" },
    { id: 4, title: "LinkedIn", data: "Suraj Mohanty" },
  ];
  return (
    <div className="about" id="about">
      <div className="about__container">
        <Rotate top left cascade>
          <div className="about__top">
            <h4>ABOUT</h4>
            <h2>About Me</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="border"></div>
          </div>
        </Rotate>
        <div className="about__bottom">
          <div className="bottom__container">
            <Roll left>
              <div className="bottom__left">
                <img src={man} alt="" />
              </div>
            </Roll>
            <div className="bottom__right">
              <Roll right>
                <div className="right__container">
                  <h1>Hi There</h1>
                  <p>
                    Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry Lorem Ipsum has been the industry's
                    standard dumm
                  </p>
                  <span className="txt">
                    Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
                    and
                  </span>
                  <div className="bottom__content">
                    <div className="content__container">
                      <div className="left">
                        {data.map((info) => (
                          <div className="contact" key={info.id}>
                            <span>{info.title} :</span>
                            <p>{info.data}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Roll>
            </div>
          </div>
        </div>
        <div className="border" style={{ marginBottom: "20px" }}></div>
      </div>
    </div>
  );
};

export default About;
