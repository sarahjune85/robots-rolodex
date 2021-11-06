import React from "react";
// don't forget each component's css:
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img alt="robot" src={`https://robohash.org/${props.robot.id}?set=set1`} />
    <h1> {props.robot.name} </h1>
    <p>{props.robot.email}</p>
  </div>
);
