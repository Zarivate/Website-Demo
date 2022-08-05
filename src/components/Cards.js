import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-9.jpg")}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              text="Travel through the islands of Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-3.jpg")}
              text="Set sail in the Atlantic to certain doom!"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={require("../images/img-4.jpg")}
              text="The world's lonliest tennis match"
              label="Activities"
              path="/products"
            />
            <CardItem
              src={require("../images/img-8.jpg")}
              text="I can't stand sand"
              label="Travel"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
