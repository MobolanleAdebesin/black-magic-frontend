import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import Tre from './20190925_152722.jpg'
import "./Profile.css";
import Profile from "./profile";
import Button from "./components/Buttons/Buttons.js";


class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      reviews: [],
    };
  };

  componentDidMount() {
    Axios.get('https://black-magic-api.herokuapp.com/reviews')
      .then(res => {
        this.setState({ reviews: res.data })
        console.log(this.state.reviews)
      })
      .catch(err => {
        console.log(err)
      })
    Axios.get('https://black-magic-api.herokuapp.com/artists')
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
        <div>
          {this.state.artists.map((artist, index) => {
            console.log(artist)
            return (
              <Profile
                artistId={artist._id}
                artistName={artist.name}
                artistOccupation={artist.occupation}
                artistBio={artist.bio}
                artistLocation={artist.location}
                artistImageSrc={artist.image}
              >
                {this.state.reviews.map((review, index) => {
                  console.log(review )
                  return (
                    <Profile
                      userName={review.username}
                      reviewId={review._id}
                      reviewText={review.text}
                      reviewArtist={review.artist}
                    ></Profile>
                  )
                })}
              </Profile>

            )
          })}

        </div>
      </div>

    )
  }
}
export default Profiles;