import React from "react";
import "./Post.css";
import { TiUser } from "react-icons/ti";
import { BiCalendarAlt, BiRightArrowAlt } from "react-icons/bi";
import { FaComments } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
const Post = ({ image, text, id }) => {
  return (
    <div className="post__card">
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__container">
        <div className="post__heading">
          <div className="auther">
            <TiUser fontSize="large" />
            <div className="auther_name">
              <span>By</span> <h6>Admin</h6>
            </div>
          </div>
          <div className="calender">
            <BiCalendarAlt />
            <h6>Monday</h6>
          </div>
          <div className="comments">
            <FaComments />
            <h6>3</h6>
          </div>
        </div>
        <div className="post__text">
          <h5>{text}</h5>
          <div className="more">
            <h6>Read More</h6>
            <BiRightArrowAlt id="expand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
