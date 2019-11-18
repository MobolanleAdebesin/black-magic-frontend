import React, { Component } from 'react';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";
import Home from "./Home";
import MeetTheCreators from "./MeetTheCreators";
import Categories from "./Categories";
import Beauty from "./Beauty";
import Music from "./Music"
import Artisans from "./Artisans";
// import Insurance from "./Searchbyinsurance";
// import Speciality from "./Searchbyspeciality";
// import CreateProfile from "./Createprofile";
// import DeleteProfile from "./Deleteprofile";
// import EditProfile from "./Editprofile"

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
          <Route path="/Categories/Beauty" exact component ={Beauty}/>
          <Route path="/Categories/Music" component ={Music}/>
          <Route path="/Categories/Artisans" component ={Artisans}/>
          {/* <Route path="/Doctors/searchbyinsurance" component ={Insurance}/>
          <Route path="/Doctors/searchbyspeciality" component ={Speciality}/>
          <Route path="/DoctorEdit/createprofile" component ={CreateProfile}/>
          <Route path="/DoctorEdit/editprofile" component ={EditProfile}/>
          <Route path="/DoctorEdit/deleteprofile" component ={DeleteProfile}/> */}
        </Router>
      </div>
    );
  };

};

export default App;
