import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import "./Beauty.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoggedin: false
        }
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
        }
        console.log(User);

        Axios.post('http://localhost:4000/users/login', User)
        .then(response => {
            localStorage.token = response.data.token
            console.log(response.data.token)
            this.setState({isLoggedIn: true})
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
            <div>
               
                <form onSubmit={this.onSubmit}>
                    <div className="signup">
                        <h1>Login! We are glad you are here</h1>
                        <div className="inputtext">
                            <input type="text" value={this.state.username} placeholder="Username" onChange={this.onChangeusername} />
                        </div>
                        <div className="inputtext">
                            <input type="text" value={this.state.password} placeholder="Password" onChange={this.onChangepassword} />
                        </div>
                        <div className="inputtext">
                            <input type="submit" placeholder="Create New Profile" />
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};

export default Login;