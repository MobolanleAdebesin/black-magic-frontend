import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Hair.css"
import Axios from "axios";

class Hair extends Component {
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
        Axios.get('http://localhost:4000/artists')
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
                        {this.state.artists.map((object, index) => {
                            console.log(object)
                            return (
                                <div className="modalcontainer">
                                    <div className="beautyCategories" key={object._id + 0} >
                                        <img src={object.image} alt="" key={object._id + 1} onClick={this.showModal} />
                                    </div>
                                    <Modal show={this.state.show} handleClose={this.hideModal} key={object._id + 2}>                                        
                                        <div>
                                            <div className="slide">
                                                <img src={object.image} alt="" key={object._id + 1}/>
                                                <p key={object._id + 3}>{object.name}</p>
                                                <p key={object._id + 4}>{object.occupation}</p>
                                                <p key={object._id + 5}>{object.bio}</p>
                                                <p key={object._id + 6}>{object.location}</p>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Link to="/Categories/Beauty/Hair/AddProfile">
                        <button>add hair dresser</button>
                    </Link>
                </div>
                <div>
                    <Link to="/Categories/Beauty/Hair/EditProfile">
                        <button>edit hair dresser</button>
                    </Link>
                </div>
                <div>
                    <Link to="/Categories/Beauty/Hair/DeleteProfile">
                        <button>delete hair dresser</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Hair;