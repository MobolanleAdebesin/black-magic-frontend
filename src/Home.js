import React, { Component } from 'react';
import "./Home.css";



class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="logo-font">
                    <h1>Creating Black Magic</h1>
                </div>
                <div className="below-text">
                    <p>I'm a black ocean, leaping and wide,</p>
                    <p>Welling and swelling I bear in the tide.</p>
                    <br/>
                    <p>Into a daybreak that’s wondrously clear</p>
                    <p>I rise</p>
                    <p>Bringing the gifts that my ancestors gave,</p>
                    <p>I am the dream and the hope of the slave.</p>
                    <p>I rise</p>
                </div>
            </div>
        )
    }
}
export default Home;