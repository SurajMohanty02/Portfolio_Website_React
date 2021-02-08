import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { IoCloseSharp } from "react-icons/io5";

import { AiOutlineMenu } from "react-icons/ai";
import Slide from "react-reveal/Slide";

import { Link } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 830) {
      setToggle(true);
      if (window.innerWidth > 830) {
        setToggle(true);
      }
    }
  }, []);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <img src={logo} alt="" />
        </div>
        <Slide left cascade>
          <ul className={toggle ? " header__right" : "header__right1"}>
            <li>
              <Link
                to="banner"
                spy={true}
                smooth={true}
                onClick={() => setToggle(true)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="service"
                spy={true}
                smooth={true}
                onClick={() => setToggle(true)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                onClick={() => setToggle(true)}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setToggle(true)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setToggle(true)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                onClick={() => setToggle(true)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                onClick={() => setToggle(true)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Slide>
      </div>
      <div className="toggle" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <AiOutlineMenu fontSize="xx-large" color="white" />
        ) : (
          <IoCloseSharp fontSize="xx-large" style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
