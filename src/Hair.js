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

    render() {
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
                                <div className="beautyCategories" key={object._id + 0}>
                                    <img src={object.image} alt="" key={object._id + 1}/>
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
                <div id="Lightbox" className="modal">
                    <span className="close pointer" onClick="closeLightbox()">&times;</span>
                    <div className="modal-content">
                        <div className="slide">
                            {/* <img src="./images/mama-africa.jpg" className="image-slide" alt="Toy car on the road." />
                            <div className="Profilecard"></div>*/}
                        </div>
                        <div className="slide">
                            {/* <img src="./images/central-dogma_med.jpeg" className="image-slide"
                                alt="Toy car exploring offroad." /> */}
                        </div>
                        <div className="slide">
                            {/* <img src="./images/tableofelements.png" className="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div className="slide">
                            {/* <img src="./images/konyaks.jpg" className="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div className="slide">
                            {/* <img src="./images/madam-cj-walker.jpg" className="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div className="slide">
                            {/* <img src="./images/Judy-Smith.png" className="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div className="slide">
                            {/* <img src="./images/Olympics.jpg" className="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div className="slide">
                            {/* <img src="./images/psych.png" className="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <a className="previous" onclick="changeSlide(-1)">&#10094;</a>
                        <a className="next" onclick="changeSlide(1)">&#10095;</a>

                        <div className="dots">
                            <div className="col">
                                {/* <img src="./images/mama-africa.jpg"
                                    className="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div className="col">
                                {/* <img src="./images/central-dogma_med.jpeg"
                                    className="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." /> */}
                            </div>
                            <div className="col">
                                {/* <img src="./images/tableofelements.png"
                                    className="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city" /> */}
                            </div>
                            <div className="col">
                                {/* <img src="./images/konyaks.jpg"
                                    className="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div className="col">
                                {/* <img src="./images/madam-cj-walker.jpg"
                                    className="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div className="col">
                                {/* <img src="./images/Judy-Smith.png"
                                    className="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div className="col">
                                {/* <img src="./images/Olympics.jpg"
                                    className="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div className="col">
                                {/* <img src="./images/psych.png"
                                    className="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hair;