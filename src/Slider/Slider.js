import React, { Component } from "react";
import './Slider.css';
import Slide from "./Slide";
import SlideRightArrow from "./SlideRightArrow";
import SlideLeftArrow from "./SlideLeftArrow";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://unsplash.com/photos/0CXWVeqUKmI",
        "https://unsplash.com/photos/8SbihEWftpo",
        "https://unsplash.com/photos/XBiN-sGiZOk"
      ],
      currentIndex: 0
    };
  }

  goToPrevSlide = () => {
      if(this.state.currentIndex === this.state.images.lenth +1){
          return this.setState({
              currentIndex: 0,
              translateValue: 0
          })
      } 
      this.setState(prevState => ({
          currentIndex: prevState.currentIndex -1,
          translateValue: prevState.translateValue - +(this.slideWidth())
      }))
  };

  goToNextSlide = () => {

    if(this.state.currentIndex === this.state.images.length -1){
        return this.setState({
            currentIndex: 0,
            translateValue: 0
        })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  };

  render() {
    return (
      <div className="slider">

          <div classname="slider-wrapper"
          style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
          }}>
              {
        this.state.images.map((image, i) => (
          <Slide key={i} image={image} />
        ))
    }
    </div>
        <SlideLeftArrow />
        <SlideRightArrow />
      </div>
    );
  }
}
