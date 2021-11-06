import React from "react";
//import child component:
import { Card } from "../card/card.component";
import "./card-list.styles.css";

// pass card component into card-list component:
export const CardList = (props) => (
  <div className="card-list">
    {props.robots.map((robot) => (
      <Card key={robot.id} robot={robot} />
    ))}
  </div>
);
