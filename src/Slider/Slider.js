import React, { Component } from 'react';
import Slide from './Slide';
import SlideRightArrow from './SlideRightArrow';
import SlideLeftArrow from './SlideLeftArrow';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    goToPrevSlide = () => {

    }

    goToNextSlide = () => {
        
    }

    render() {
        return(
            <div className="slider">
                <Slide />

                <SlideLeftArrow />
                <SlideRightArrow />
            </div>
        );
    }
}