import React, { useState } from "react";
import "./Box.css";
import { AiFillApple, AiFillGithub, AiOutlineCamera } from "react-icons/ai";
import { FiBox } from "react-icons/fi";
import { FaFileVideo, FaSearchPlus } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import Bounce from "react-reveal/Bounce";
import Spin from "react-reveal/Spin";
import Rotate from "react-reveal/Rotate";

const Box = () => {
  const [text, setText] = useState(
    " Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum"
  );
  return (
    <div className="box">
      <Bounce left cascade>
        <div className="box__container">
          <Rotate top right cascade>
            <div className="content">
              <Spin>
                <div className="icon">
                  <AiFillGithub id="color" />
                </div>
              </Spin>
              <div className="text">
                <h6>Web Developer</h6>
                <p>{text}</p>
              </div>
            </div>
          </Rotate>
          <Rotate top right cascade>
            <div className="content">
              <Spin>
                <div className="icon">
                  <AiOutlineCamera id="color" />
                </div>
              </Spin>
              <div className="text">
                <h6>Photography</h6>
                <p>{text}</p>
              </div>
            </div>
          </Rotate>
          <Rotate top right cascade>
            <div className="content">
              <Spin>
                <div className="icon">
                  <FiBox id="color" />
                </div>
              </Spin>
              <div className="text">
                <h6>Web Designing</h6>
                <p>{text}</p>
              </div>
            </div>
          </Rotate>
          <Rotate top right cascade>
            <div className="content">
              <Spin>
                <div className="icon">
                  <AiFillApple id="color" />
                </div>
              </Spin>
              <div className="text">
                <h6>App Developing</h6>
                <p>{text}</p>
              </div>
            </div>
          </Rotate>
          <Rotate top right cascade>
            <div className="content">
              <Spin>
                <div className="icon">
                  <FaFileVideo id="color" />
                </div>
              </Spin>
              <div className="text">
                <h6>Video Editing</h6>
                <p>{text}</p>
              </div>
            </div>
          </Rotate>
          <Rotate top right cascade>
            <div className="content">
              <Spin>
                <div className="icon">
                  <FaSearchPlus id="color" />
                </div>
              </Spin>
              <div className="text">
                <h6>SEO Expert</h6>
                <p>{text}</p>
              </div>
            </div>
          </Rotate>
        </div>
      </Bounce>
    </div>
  );
};

export default Box;
