import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BodyCare extends Component {
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
                <div className="Beauty-box Beauty-box2">
                    {/* <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div>
                    <div className="beautyCategories"></div> */}
                </div>
            </div>
        )
    }
}
export default BodyCare;