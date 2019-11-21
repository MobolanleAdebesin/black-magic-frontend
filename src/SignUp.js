import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import "./Beauty.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordconfirm: "",
            isLoggedin: false
        }
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangepasswordconfirm = this.onChangepasswordconfirm.bind(this);
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
    onChangepasswordconfirm(evt) {
        this.setState({
            passwordconfirm: evt.target.value
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
    render() {
        return (
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
        );
    };
};

export default SignUp;