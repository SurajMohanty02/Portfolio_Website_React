import React from "react";
import "./Blog.css";
import food from "../images/food.jpg";
import blogs from "../images/blog.jpg";
import temple from "../images/temple.jpg";
import Post from "./Post";
import Bounce from "react-reveal/Bounce";
import HeadShake from "react-reveal/HeadShake";
const Blog = () => {
  const blog = [
    {
      id: 1,
      image: blogs,
      text: "Dream Setup with Coffee Waiting for Me",
    },
    {
      id: 2,
      image: food,
      text: "Awesome Food Prepared by me",
    },
    {
      id: 3,
      image: temple,
      text: "Let us know about this Temple",
    },
  ];
  return (
    <div className="blog" id="blog">
      <div className="blog__container">
        <Bounce left cascade>
          <div className="blog__top">
            <h4>LATEST POST</h4>
            <h2>Latest Blog</h2>
            <p>
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry Lorem Ipsum has been the industry's standard
              dummy text eve
            </p>
          </div>
        </Bounce>
        <HeadShake>
          <div className="blog__bottom">
            <div className="blog__bottom__container">
              {blog.map((data) => (
                <Post
                  image={data.image}
                  text={data.text}
                  id={data.id}
                  key={data.id}
                />
              ))}
            </div>
          </div>
          <div className="border"></div>
        </HeadShake>
      </div>
    </div>
  );
};

export default Blog;
