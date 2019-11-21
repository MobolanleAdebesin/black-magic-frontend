import React, { Component } from "react";
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

  goToPrevSlide = () => {};

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  };

  render() {
    return (
      <div className="slider">
        <Slide />

        <SlideLeftArrow />
        <SlideRightArrow />
      </div>
    );
  }
}
