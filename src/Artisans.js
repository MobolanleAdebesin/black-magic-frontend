import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";

class Artisans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    componentDidMount() {
        Axios.get('https://black-magic-api.herokuapp.com/artists/occupation/artist')
            .then(res => {
                this.setState({ artists: res.data })
                console.log(this.state.artists)
            })
            .catch(err => {
                console.log(err)
            })
    }

    showModal(evt) {
        this.setState({
            show: true
        });
    }

    hideModal(evt) {
        this.setState({
            show: false
        });
    }

    render() {
        const Modal = ({ handleClose, show, children }) => {
            const showHideClassName = show ? "Modal display-block" : "Modal display-none";
            return (
                <div className={showHideClassName}>
                    <span className="close pointer" onClick={handleClose}>&times;</span>
                    <section className="modal-content">
                        {children}
                    </section>
                </div>
            )
        }

        return (
            <div>
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
                        {this.state.artists.map((object, index) => {
                            console.log(object)
                            return (
                                <div className="beautyCategories" Style={{backgroundImage: 'url{object.image}'}}>
                                    <div key={object._id + 0} >
                                        <img className="artistimg" src={object.image} alt="" key={object._id + 1} onClick={this.showModal} width="150px" height="200px"/>
                                        <div className="artistname"><p className="artistname" key={object._id + 3}>{object.name}</p></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Artisans;