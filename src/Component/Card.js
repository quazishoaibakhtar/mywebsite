import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div>
      <Avatar image={props.image} name={props.name} />
      <p>My self {props.name}</p>
      <p> This is my {props.email}</p>
    </div>
  );
}

export default Card;
