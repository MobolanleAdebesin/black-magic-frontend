import React, { Component } from "react";
import Tre from './20190925_152722.jpg'
import "./Profile.css";
import Button from "./components/Buttons/Buttons.js";

class Profile extends Component {
  render() {
    return(
     <div className="Container">
       <div className="UserBackground">
         <div className="UserProfile">
           <div className="UserImage">
           <img src={Tre}alt="" height="100px" width="100px" />
           <div className="UserInfo">
           <Button label="About" type="about" />
           </div>
           </div>
         </div>

       </div>
    </div>
    )
  }
}
export default Profile;