import React from "react";
import "./Buttons.css";

const Buttons = props => {
  let classList = "";
  let types = ["link", "signUp", "like", "comment", "reviews", "about"]
  if(types.includes(props.type)) {
      classList += `button-${props.type}`
  }

  return( 
      <div>
      <div className="Button">
  <button class={classList}>{props.label}</button>
  </div>
  <div className="Icon Button">
    <button class={classList}>{props.label}
   <img src={props.icon}/>
   </button>
   </div>
   </div>
  )
};


export default Buttons;
