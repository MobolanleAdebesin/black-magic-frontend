import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div>
                    <Link to="/">
                        <h4>Black Magic</h4>
                    </Link>
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
                    </ul>
                </div>
                <div>
                    <input type="text" value="" placeholder="Search..." />
                </div>  
            </div>
        )
    }
}

export default Navbar;