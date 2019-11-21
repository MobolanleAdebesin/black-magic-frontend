import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Axios from "axios";
import "./Beauty.css";

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: "",
    //         password: "",
    //         isLoggedin: false
    //     }
    //     this.onChangeusername = this.onChangeusername.bind(this);
    //     this.onChangepassword = this.onChangepassword.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }

    // componentDidMount() {
    //     if (localStorage.token) {
    //       this.setState({
    //         isLoggedIn: true
    //       });
    //     } else {
    //       this.setState({
    //         isLoggedIn: false
    //       });
    //     }
    // }

    // onChangeusername(evt) {
    //     this.setState({
    //         username: evt.target.value
    //     });
    // }
    // onChangepassword(evt) {
    //     this.setState({
    //         password: evt.target.value
    //     });
    // }

    // onSubmit(evt) {
    //     evt.preventDefault();
    //     const User = {
    //         username: this.state.username,
    //         password: this.state.password,
    //         isLoggedin: true
    //     }
    //     console.log(User);

    //     Axios.post('http://localhost:4000/users/login', User)
    //     .then(response => {
    //         localStorage.token = response.data.token
    //         console.log(response.data.token)
    //         this.setState({isLoggedIn: true})
    //     })
    //     .catch(err => console.log(err))

    //     this.setState({
    //         username: "",
    //         password: "",
    //         isLoggedin: false
    //     })
    // }
    render() {
        return (
            <div>
                <h1>Welcome! we are glad you're here</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div>
                        <h1>To Login</h1>
                        <div>
                            <input type="text" value={this.props.username} placeholder="Username" onChange={this.props.onChangeusername} />
                        </div>
                        <div>
                            <input type="text" value={this.props.password} placeholder="Password" onChange={this.props.onChangepassword} />
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

export default Login;