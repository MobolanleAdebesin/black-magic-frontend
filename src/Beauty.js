import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Beauty.css"

class Beauty extends Component {
    render() {
        return (
            <div className="Beauty">
                <div className="Sidebar-box">
                    <ul className="Sidebar">
                        <Link to="/Categories/Beauty/Hair">
                            <li className="Sidebar-nav">Hair</li>
                        </Link>
                        <Link to="/Categories/Beauty/Makeup">
                            <li className="Sidebar-nav">Makeup</li>
                        </Link>
                        <Link to="/Categories/Beauty/Nails">
                            <li className="Sidebar-nav">Nails</li>
                        </Link>
                        <Link to="/Categories/Beauty/Body-Art">
                            <li className="Sidebar-nav">Body Art</li>
                        </Link>
                        <Link to="/Categories/Beauty/Body-Care">
                            <li className="Sidebar-nav">Body Care</li>
                        </Link>
                        <Link to="/Categories/Beauty/Diet-and-Fitness">
                            <li className="Sidebar-nav">Diet and Fitness</li>
                        </Link>
                    </ul>
                </div>
                <div className="Beauty-box">
                    <div className="beautyCategories" id="one"></div>
                    <div className="beautyCategories" id="two"></div>
                    <div className="beautyCategories" id="three"></div>
                    <div className="beautyCategories" id="four"></div>
                    <div className="beautyCategories" id="five"></div>
                    <div className="beautyCategories" id="six"></div>
                    <div className="beautyCategories" id="seven"></div>
                    <div className="beautyCategories" id="eight"></div>
                    <div className="beautyCategories" id="nine"></div>
                    <div className="beautyCategories" id="ten"></div>
                    <div className="beautyCategories" id="eleven"></div>
                    <div className="beautyCategories" id="twelve"></div>
                    <div className="beautyCategories" id="thirteen"></div>
                    <div className="beautyCategories" id="fourteen"></div>
                    <div className="beautyCategories" id="fifteen"></div>
                    <div className="beautyCategories" id="sixteen"></div>
                </div>
            </div>

        )
    }
}
export default Beauty;

