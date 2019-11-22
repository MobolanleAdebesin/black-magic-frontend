import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";
import Home from "./Home";
import MeetTheCreators from "./MeetTheCreators";
import Categories from "./Categories";
import Profile from "./profile";
// import RegisterLogin from "./Register";
import Login from "./Login";
import SignUp from "./SignUp";
import Beauty from "./Beauty";
import Music from "./Music";
import Artisans from "./Artisans";
import AddHairdresserForm from "./AddHairDresser";
import DeleteProfile from "./DeleteProfile";
import EditProfile from "./EditProfile";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      display: "hide",
      page: ""
    };
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
  }
  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }
  renderLogin() {
    this.setState({ page: "login" });
  }
  renderSignUp() {
    this.setState({ page: "signup" });
  }

  onChangeusername(evt) {
    this.setState({
      username: evt.target.value
    });
  }
  onChangepassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  onSignUp(evt) {
    evt.preventDefault();
    const User = {
      username: this.state.username,
      password: this.state.password,
      passwordconfirm: this.state.passwordconfirm
    };
    console.log(User);

    Axios.post("http://localhost:4000/users/add", User)
      .then(response => {
        localStorage.token = response.data.token;
        console.log(response.data.token);
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));

    this.setState({
      username: "",
      password: "",
      passwordconfirm: ""
    });
  }

  onLogin(evt) {
    evt.preventDefault();
    const User = {
      username: this.state.username,
      password: this.state.password,
      isLoggedin: true
    };
    console.log(User);

    Axios.post("http://localhost:4000/users/login", User)
      .then(response => {
        localStorage.token = response.data.token;
        console.log(response.data.token);
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));

    this.setState({
      username: "",
      password: "",
      isLoggedin: false
    });
  }
  render() {
    if (this.state.page === "") {
      return (
        <div className="App">
          <Router>
            <Navbar logout={this.logout} />
            <br />
            <Route path="/" exact component={Home} />
            <Route path="/MeetTheCreators" exact component={MeetTheCreators} />
            <Route path="/Categories" exact component={Categories} />
            <Route path="/Profile" exact component={Profile} />
            {/* <Route path="/RegisterLogin" exact component={RegisterLogin} /> */}
            {/* <Route path="/user/login" exact component ={Login}/> */}
            <Route path="/user/signup" exact component={SignUp} />
            <Route path="/Categories/Beauty" exact component={Beauty} />
            <Route path="/Categories/Music" component={Music} />
            <Route path="/Categories/Artisans" component={Artisans} />
            <Route path="/Proile/AddProfile" component={AddHairdresserForm} />
            <Route path="/Profile/DeleteProfile" component={DeleteProfile} />
            <Route path="/Profile/EditProfile" component={EditProfile} />
            {/* <Route path="/DoctorEdit/deleteprofile" component ={DeleteProfile}/> */}
            <button onClick={this.renderLogin}>Login</button>
            <button onClick={this.renderSignUp}>Signup</button>
          </Router>
        </div>
      );
    } else if (this.state.page === "login") {
      return (
        <div className="App">
          <Router>
            <Navbar logout={this.logout} />
            <br />
            <Route path="/" exact component={Home} />
            <Route path="/MeetTheCreators" exact component={MeetTheCreators} />
            <Route path="/Categories" exact component={Categories} />
            <Route path="/Profile" exact component={Profile} />
            {/* <Route path="/RegisterLogin" exact component={RegisterLogin} /> */}
            {/* <Route path="/user/login" exact component ={Login}/> */}
            <Route path="/user/signup" exact component={SignUp} />
            <Route path="/Categories/Beauty" exact component={Beauty} />
            <Route path="/Categories/Music" component={Music} />
            <Route path="/Categories/Artisans" component={Artisans} />
            <Route path="/Proile/AddProfile" component={AddHairdresserForm} />
            <Route path="/Profile/DeleteProfile" component={DeleteProfile} />
            <Route path="/Profile/EditProfile" component={EditProfile} />
            {/* <Route path="/DoctorEdit/deleteprofile" component ={DeleteProfile}/> */}
            <Login></Login>
          </Router>
        </div>
      );
    }
  }
}

export default App;
