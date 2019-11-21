import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Categories.css"

class Categories extends Component {
    render() {
        return (
            <div className="Beauty">
                <div className="Sidebar-box">
                    <ul className="Sidebar">
                        <Link to="/Categories/Beauty">
                            <li className="Sidebar-nav">Beauty</li>
                        </Link>
                        <Link to="/Categories/Music">
                            <li className="Sidebar-nav">Music</li>
                        </Link>
                        <Link to="/Categories/Artisans">
                            <li className="Sidebar-nav">Artisans</li>
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
export default Categories;

