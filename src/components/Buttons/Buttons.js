import React from "react";
import "./Buttons.css";

const Buttons = props => {
  let classList = "";
  let types = ["link", "signUp"]
  if(types.includes(props.type)) {
      classList += `button-${props.type}`
  }

  return <button class={classList}>{props.label}</button>;
};
export default Buttons;
