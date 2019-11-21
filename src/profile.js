import React, { Component } from "react";
import "./Profile.css";
import Carousel from "./Slider/Slider";

class Profile extends Component {
  render() {
    return (
      <div className="Container">
        <Carousel />
        <div className="UserBackground">
          <div className="UserProfile">
            <div className="UserImage">
              <div className="UserInfo"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
