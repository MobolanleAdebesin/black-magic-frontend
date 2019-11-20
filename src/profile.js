import React, { Component } from "react";
import Tre from './20190925_152722.jpg'
import "./Profile.css";

class Profile extends Component {
  render() {
    return(
     <div className="Container">
       <div className="UserBackground">
         <div className="UserProfile">
           <div className="UserImage">
           <img src={Tre}alt="" height="100px" width="100px" />
           <div className="UserInfo">
             
           </div>
           </div>
         </div>

       </div>
    </div>
    )
  }
}
export default Profile;