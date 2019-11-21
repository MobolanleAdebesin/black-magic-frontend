import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Music extends Component {
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
export default Music;