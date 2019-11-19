import React from "react";
import "./Forms.css";

const Forms = props => {
  let classList = "";
  let types = ["search", "firstName", "search", "lastName", "password"];
  if (types.includes(props.type)) {
    classList += `forms-${props.type}`;
  }

  return <form class={classList}>{props.label}</form>;
};
export default Forms;
