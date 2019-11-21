import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Axios from "axios";
import "./Navbar.css";
import Login from "./Login";


class RegisterLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false
        }
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
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

    onSignUp(evt) {
        evt.preventDefault();
        const User = {
            username: this.state.username,
            password: this.state.password,
            passwordconfirm: this.state.passwordconfirm,
        }
        console.log(User);

        Axios.post('http://localhost:4000/users/add', User)
            .then(response => {
                localStorage.token = response.data.token
                console.log(response.data.token)
                this.setState({ isLoggedIn: true })
            })
            .catch(err => console.log(err))

        this.setState({
            username: "",
            password: "",
            passwordconfirm: ""
        })
    }

    onLogin(evt) {
        evt.preventDefault();
        const User = {
            username: this.state.username,
            password: this.state.password,
            isLoggedin: true
        }
        console.log(User);

        Axios.post('http://localhost:4000/users/login', User)
            .then(response => {
                localStorage.token = response.data.token
                console.log(response.data.token)
                this.setState({ isLoggedIn: true })
            })
            .catch(err => console.log(err))

        this.setState({
            username: "",
            password: "",
            isLoggedin: false
        })
    }

    render() {

        return (
            <div className="login-signup-div">
                <div>
                    <h1>Welcome! we are glad you're here</h1>
                    <form onSignUp={this.onSignUp}>
                        <div>
                            <h1>Sign Up</h1>
                            <div>
                                <input type="text" value={this.state.username} placeholder="Username" onChange={this.onChangeusername} />
                            </div>
                            <div>
                                <input type="text" value={this.state.password} placeholder="Password" onChange={this.onChangepassword} />
                            </div>
                            <div>
                                <input type="text" value={this.state.passwordconfirm} placeholder="Password Confirmation" onChange={this.onChangepasswordconfirm} />
                            </div>
                            <div>
                                <input type="submit" placeholder="Create New Profile" />
                            </div>
                        </div>
                    </form>
                </div>
                <Route path="/user/login" 
                render={props => {
                    return (
                        <Login
                    username={this.state.username}
                    password={this.state.password}
                    isLoggedIn={this.state.isLoggedin}
                    onLogin={this.onLogin} />
                    )
                }}/>                
            </div>
        )
    }
}

export default RegisterLogin;