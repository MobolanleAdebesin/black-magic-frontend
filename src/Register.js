import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import "./Navbar.css";
import Login from "./Login";
import "./Register.css";


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
                <div className="RegisterDiv">
                    
                    <form onSubmit={this.onSignUp}>
                        <div className="signup">
                            <h1>Sign Up! We are glad you are here</h1>
                            <div className="inputtext">
                                <input type="text" value={this.state.username} placeholder="Username" onChange={this.onChangeusername} />
                            </div>
                            <div className="inputtext">
                                <input type="text" value={this.state.password} placeholder="Password" onChange={this.onChangepassword} />
                            </div>
                            <div className="inputtext">
                                <input type="text" value={this.state.passwordconfirm} placeholder="Password Confirmation" onChange={this.onChangepasswordconfirm} />
                            </div>
                            <div className="inputtext">
                                <input type="submit" placeholder="Create New Profile" />
                            </div>
                        </div>
                    </form>
                </div>
                <div >
                    <Link to="/user/login">
                        <p className="Signinlink">Got an account? Click here</p>
                    </Link>
                </div>
                
            </div>
        )
    }
}

export default RegisterLogin;