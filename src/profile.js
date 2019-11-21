import React, { Component } from "react";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import Axios from "axios";
import Tre from './20190925_152722.jpg'
>>>>>>> master
import "./Profile.css";
import Carousel from "./Carousel";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      reviews: [],
      username: "",
      text: "",
      photos: "",
      artist: ""
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangetext = this.onChangetext.bind(this);
    this.onChangephotos = this.onChangephotos.bind(this);
    this.onChangeartist = this.onChangeartist.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  componentDidMount() {
    Axios.get('http://localhost:4000/reviews')
      .then(res => {
        if (res.data.artist === this.state.artist)
        this.setState({ reviews: res.data })
        console.log(this.state.reviews)
      })
      .catch(err => {
        console.log(err)
      })
    Axios.get('http://localhost:4000/artists')
      .then(res => {
        this.setState({ artists: res.data })
        console.log(this.state.artists)
      })
      .catch(err => {
        console.log(err)
      })
  }

  onChangeUsername(evt) {
    this.setState({
      username: evt.target.value

    });
    console.log(evt.target.value)
  }
  onChangetext(evt) {
    this.setState({
      text: evt.target.value
    });
    console.log(this.state.text)
  }
  onChangephotos(evt) {
    this.setState({
      photos: evt.target.value
    });
    console.log(evt.target.value)
  }
  onChangeartist(evt) {
    this.setState({
      artist: evt.target.value
    });
    console.log(evt.target.value)
  }

  onSubmit(evt) {
    evt.preventDefault();
    console.log('submitted')

    Axios({
      method: "post",
      url: 'http://localhost:4000/reviews/add',
      data: {
        username: this.state.username,
        text: this.state.text,
        photos: {
          photo1: this.state.photos
        },
        artist: this.state.artist
      }
    })

      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.setState({
      username: "",
      text: "",
      photos: "",
      artist: ""
    })
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="Container">
        <Carousel />
        <div className="UserBackground">
          <div className="UserProfile">
            <div className="UserImage">
              <div className="UserInfo"></div>
=======
      <div className="Profile-Container">
        <div className="Profiile-box" id="Profile-box-picture">
          <img src={Tre} alt="" height="400px" width="250px" />
        </div>
        <div className="Profiile-box" id="Profile-info-box">
          {this.state.artists.map((object, index) => {
            console.log(object)
            return (
              <div className="beautyCategories" key={object._id + 0} >
                <img src={object.image} alt="" key={object._id + 1} />
                <p key={object._id + 3}>{object.name}</p>
                <p key={object._id + 4}>{object.occupation}</p>
                <p key={object._id + 5}>{object.bio}</p>
                <p key={object._id + 6}>{object.location}</p>
              </div>
            )
          })}
          <div>
            <Link to="/Proile/AddProfile">
              <button>add hair dresser</button>
            </Link>
          </div>
          <div>
            <Link to="/Profile/EditProfile">
              <button>edit hair dresser</button>
            </Link>
          </div>
          <div>
            <Link to="/Profile/DeleteProfile">
              <button>delete hair dresser</button>
            </Link>
          </div>
        </div>

        <div className="Profiile-box" id="Profile-box-review">
          <div className="Reviewlinkbox">
            <div className="Reviewlink">
              <h1>View reviews</h1>
              {this.state.reviews.map((object, index) => {
                return (
                  <div key={object._id + 0}>
                    <p key={object._id + 1}>{object.username}: {object.text}</p>
                  </div>
                )
              })}
            </div>
            <hr />
            <div className="Reviewlink">
              <h1>Make a review</h1>
              <form onSubmit={this.onSubmit}>
                <div>
                  <input type="text" value={this.state.username} placeholder="Name" onChange={this.onChangeUsername} />
                </div>
                <div>
                  <input type="text" value={this.state.text} placeholder="text" onChange={this.onChangetext} />
                </div>
                <div>
                  <input type="text" value={this.state.photos} placeholder="photos" onChange={this.onChangephotos} />
                </div>
                <div>
                  <input type="text" value={this.state.artist} placeholder="artist" onChange={this.onChangeartist} />
                </div>
                <div>
                  <input type="submit" placeholder="Create New Profile" />
                </div>
              </form>
>>>>>>> master
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> master
  }
}
export default Profile;
