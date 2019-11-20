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
import Hair from "./Hair";
import BodyCare from "./Body-Care";
import Makeup from "./Makeup";
import Nails from "./Nails";
import BodyArt from "./Body-Art"
import DietandFitness from "./DietandFitness"

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
          <Route path="/Categories/Beauty/Hair" component ={Hair}/>
          <Route path="/Categories/Beauty/Makeup" component ={Makeup}/>
          <Route path="/Categories/Beauty/Nails" component ={Nails}/>
          <Route path="/Categories/Beauty/Body-Art" component ={BodyArt}/>
          <Route path="/Categories/Beauty/Body-Care" component ={BodyCare}/>
          <Route path="/Categories/Beauty/Diet-and-Fitness" component ={DietandFitness}/>
          {/* <Route path="/DoctorEdit/deleteprofile" component ={DeleteProfile}/> */}
        </Router>
      </div>
    );
  };

};

export default App;
