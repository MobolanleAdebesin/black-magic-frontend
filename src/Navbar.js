import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Navbar.css";
import Login from "./Login";

class Navbar extends Component {
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
        this.setState({
            username: "",
            password: "",
            isLoggedin: false
        });
    }




    render() {
        return (
            <div className="Navbar">
                <div className="signature-box1">
                    <div className="signature-box2">
                        <div className="signature-box">
                            <Link to="/">
                                <h4 className="signature">Black Magic</h4>
                            </Link>
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
                        <Link to="/RegisterLogin">
                            <li>Register/Login</li>
                        </Link>
                        <li onClick={this.handleLogOut}>Log Out</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
