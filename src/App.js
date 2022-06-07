import React from "react";
import "./styles.css";
//import card1
import Card from "./components/Card";
import cardsArr from "./data";

export default function App() {
  const cards = cardsArr.map((ele, index) => {
    return (
      <Card
        // img={ele.img}
        // title={ele.title}
        // text={ele.text}
        // url={ele.url}
        {...ele} // Same as above but shortcut to call all
        key={index} // Need this for unique value ...
      />
    );
  });
  console.log("this is cards", cards);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{cards}</section>
      {/* this is retrun array from map */}
    </div>
  );
}
