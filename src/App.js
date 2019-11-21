import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";
import Home from "./Home";
import MeetTheCreators from "./MeetTheCreators";
import Categories from "./Categories";
import Profile from "./profile";
import RegisterLogin from "./Register";
// import Login from "./Login";
import SignUp from "./SignUp";
import Beauty from "./Beauty";
import Music from "./Music";
import Artisans from "./Artisans";
import AddHairdresserForm from "./AddHairDresser"
import DeleteProfile from "./DeleteProfile"
import EditProfile from "./EditProfile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <br />
          <Route path="/" exact component ={Home}/>
          <Route path="/MeetTheCreators" exact component ={MeetTheCreators}/>
          <Route path="/Categories" exact component ={Categories}/>
          <Route path="/Profile" exact component ={Profile}/>
          <Route path="/RegisterLogin" exact component = {RegisterLogin}/>
          {/* <Route path="/user/login" exact component ={Login}/> */}
          <Route path="/user/signup" exact component ={SignUp}/>
          <Route path="/Categories/Beauty" exact component ={Beauty}/>
          <Route path="/Categories/Music" component ={Music}/>
          <Route path="/Categories/Artisans" component ={Artisans}/>
          <Route path="/Proile/AddProfile" component ={AddHairdresserForm}/>
          <Route path="/Profile/DeleteProfile" component ={DeleteProfile}/>
          <Route path="/Profile/EditProfile" component ={EditProfile}/>
          {/* <Route path="/DoctorEdit/deleteprofile" component ={DeleteProfile}/> */}
        </Router>
      </div>
    );
  };

};

export default App;
