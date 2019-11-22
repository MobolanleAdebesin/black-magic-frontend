import React from "react";
import "./Forms.css";

const Forms = props => {
  let classList = "";
  let types = ["search"];
  if (types.includes(props.type)) {
    classList += `form-${props.type}`;
  }

  return <input class={classList}>{props.label}</input>;
};
export default Forms;
