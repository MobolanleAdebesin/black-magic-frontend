import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Categories.css"


class Categories extends Component {
    render() {
        return (
            <div className="Category-container">
                <div className="Category-blackshadow-bow">
                    <Link to="/Categories/Beauty">
                        <div className="Category-box">
                            <p className="Category-name">Beauty</p>
                        </div>
                    </Link>
                </div>
                <div className="Category-blackshadow-bow">
                    <Link to="/Categories/Music">
                        <div className="Category-box">
                            <p className="Category-name">Music</p>
                        </div>
                    </Link>
                </div>
                <div className="Category-blackshadow-bow">
                    <Link to="/Categories/Artisans">
                        <div className="Category-box">
                            <p className="Category-name">Artisans</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Categories;