import React from "react";
import "./Price.css";
import Bounce from "react-reveal/Bounce";

const Price = () => {
  const price = [
    {
      id: 1,
      name: "Basic",
      price: 50,
      storage: "5GB Storage Space",
      bandwidth: "20GB Monthly Bandwidth",
      database: "My SQL Databases",
      email: "100 Email Account",
      domain: "10 Free Domain Names",
    },
    {
      id: 2,
      name: "Standard",
      price: 80,
      storage: "5GB Storage Space",
      bandwidth: "20GB Monthly Bandwidth",
      database: "My SQL Databases",
      email: "100 Email Account",
      domain: "10 Free Domain Names",
    },
    {
      id: 3,
      name: "Premium",
      price: 160,
      storage: "5GB Storage Space",
      bandwidth: "200GB Monthly Bandwidth",
      database: "My SQL Databases",
      email: "100 Email Account",
      domain: "10 Free Domain Names",
    },
  ];
  return (
    <div className="price" id="price">
      <div className="container">
        <Bounce top>
          <div className="text2">
            <h4>CHOOSE A PLAN</h4>
            <h2>Pricing Plan</h2>
            <p>
              Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
              typesetting industry Lorem Ipsum has been the industry's standard
              dummy text ever
            </p>
          </div>
        </Bounce>
        <Bounce left cascade>
          <div className="price__container">
            {price.map((data) => (
              <div className="price__card" key={data.id}>
                <span className="icons"></span>
                <div className="top__data">
                  <h3>{data.name}</h3>
                  <h1>$ {data.price}</h1>
                </div>
                <div className="bottom__data">
                  <ul className="data">
                    <li>{data.storage}</li>
                    <p></p>
                    <li>{data.bandwidth}</li>
                    <p></p>
                    <li>{data.database}</li>
                    <p></p>
                    <li>{data.email}</li>
                    <p></p>
                    <li>{data.domain}</li>
                    <p></p>
                  </ul>

                  <button className="btn_purchase">Purchase</button>
                </div>
              </div>
            ))}
          </div>
        </Bounce>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default Price;
