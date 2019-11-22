import React from "react";
import "./FormsL.css";

const FormsL = props => {
  let classList = "";
  let types = ["firstName", "search", "lastName", "password"];
  if (types.includes(props.type)) {
    classList += `formL-${props.type}`;
  }

  return <input class={classList}>{props.label}</input>;
};
export default FormsL;
