import React from "react";
import "./IconButtons.css";

const IconButtons = props => {
  let classList = "";
  let types = ["link", "like"];
  if (types.includes(props.type)) {
    classList += `iconButton-${props.type}`;
  }

  return (
    <button class={classList}>
      <img src={props.icon} />
    </button>
  );
};

export default IconButtons;
