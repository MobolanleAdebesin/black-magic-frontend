import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Categories extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/Categories/Beauty">
                        <button>
                            Beauty
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Categories/Music">
                        <button>
                            Music
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Categories/Artisans">
                        <button>
                            Artisans
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Categories;