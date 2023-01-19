import React from "react";

function Avatar(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Avatar;
