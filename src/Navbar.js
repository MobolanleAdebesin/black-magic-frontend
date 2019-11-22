import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Navbar.css";
import Login from "./Login";

class Navbar extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedin: false
    };
    this.onChangeusername = this.onChangeusername.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(evt) {
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
=======
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoggedin: false
        }
        this.handleLogOut = this.handleLogOut.bind(this);
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

    handleLogOut() {
        this.setState({
            username: "",
          password: ''
        })
        localStorage.clear()
        console.log(this.state)
    }
>>>>>>> 252437a61080cbd391746843ceb86cf4ef3543dd

    this.setState({
      username: "",
      password: "",
      isLoggedin: false
    });
  }

<<<<<<< HEAD
  render() {
    return (
      <div className="Navbar">
        <div className="signature-box1">
          <div className="signature-box2">
            <div className="signature-box">
              <Link to="/">
                <h4 className="signature">Black Magic</h4>
              </Link>
=======
                <div className="NavLinks">
                    <ul className="NavBar">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/Meetthecreators">
                            <li>Meet the Creators</li>
                        </Link>
                        <Link to="/Categories">
                            <li>Categories</li>
                        </Link>
                        <Link to="/Profile">
                            <li>Profile</li>
                        </Link>
                        <Link to="/RegisterLogin">
                            <li>Register/Login</li>
                        </Link>
                        <li onClick={this.handleLogOut}>Log Out</li>
                    </ul>
                </div>
>>>>>>> 252437a61080cbd391746843ceb86cf4ef3543dd
            </div>
          </div>
        </div>

        <div className="NavLinks">
          <ul className="NavBar">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Meetthecreators">
              <li>Meet the Creators</li>
            </Link>
            <Link to="/Categories">
              <li>Categories</li>
            </Link>
            <Link to="/Profile">
              <li>Profile</li>
            </Link>

            <li>Logout</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
