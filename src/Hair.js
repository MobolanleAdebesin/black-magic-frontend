import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Hair.css"

class Hair extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    };          
    //   function closeLightbox() {
    //     document.getElementById('Lightbox').style.display = 'none';
    //   };
    
      
    //   function showSlide(n) {
    //     const slides = document.getElementsByClassName('slide');
    //     let modalPreviews = document.getElementsByClassName('modal-preview');
      
    //     if (n > slides.length) {
    //       slideIndex = 1;	
    //     };
        
    //     if (n < 1) {
    //       slideIndex = slides.length;
    //     };
      
    //     for (let i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";
    //     };
        
    //     for (let i = 0; i < modalPreviews.length; i++) {
    //       modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    //     };
        
    //     slides[slideIndex - 1].style.display = 'block';
    //     modalPreviews[slideIndex - 1].className += ' active';
    //   };

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
                        <div className="beautyCategories"></div>
                        <div className="beautyCategories"></div>
                    </div>
                </div>
                <div id="Lightbox" class="modal">
                    <span class="close pointer" onclick="closeLightbox()">&times;</span>
                    <div class="modal-content">
                        <div class="slide">
                            {/* <img src="./images/mama-africa.jpg" class="image-slide" alt="Toy car on the road." />
                            <div class="Profilecard"></div>*/}
                        </div>
                        <div class="slide">
                            {/* <img src="./images/central-dogma_med.jpeg" class="image-slide"
                                alt="Toy car exploring offroad." /> */}
                        </div>
                        <div class="slide">
                            {/* <img src="./images/tableofelements.png" class="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div class="slide">
                            {/* <img src="./images/konyaks.jpg" class="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div class="slide">
                            {/* <img src="./images/madam-cj-walker.jpg" class="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div class="slide">
                            {/* <img src="./images/Judy-Smith.png" class="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div class="slide">
                            {/* <img src="./images/Olympics.jpg" class="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <div class="slide">
                            {/* <img src="./images/psych.png" class="image-slide"
                                alt="Toy car in the city." /> */}
                        </div>
                        <a class="previous" onclick="changeSlide(-1)">&#10094;</a>
                        <a class="next" onclick="changeSlide(1)">&#10095;</a>

                        <div class="dots">
                            <div class="col">
                                {/* <img src="./images/mama-africa.jpg"
                                    class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div class="col">
                                {/* <img src="./images/central-dogma_med.jpeg"
                                    class="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." /> */}
                            </div>
                            <div class="col">
                                {/* <img src="./images/tableofelements.png"
                                    class="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city" /> */}
                            </div>
                            <div class="col">
                                {/* <img src="./images/konyaks.jpg"
                                    class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div class="col">
                                {/* <img src="./images/madam-cj-walker.jpg"
                                    class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div class="col">
                                {/* <img src="./images/Judy-Smith.png"
                                    class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div class="col">
                                {/* <img src="./images/Olympics.jpg"
                                    class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                            <div class="col">
                                {/* <img src="./images/psych.png"
                                    class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hair;