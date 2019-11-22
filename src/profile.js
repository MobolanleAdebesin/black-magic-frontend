import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.onDelete = this.onDelete.bind(this);
    };

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
            url: 'https://black-magic-api.herokuapp.com/reviews/add',
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

    onDelete(evt) {
        evt.preventDefault();
        if (this.props.artistName) {
            console.log(this.props.artistName)
            const Url = (`https://black-magic-api.herokuapp.com/artists/remove/${this.props.artistName}`);
            console.log(Url)

            Axios.delete(Url)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

    }


    render() {
        return (
            <div className="Creator-box">
                <div className="Container" id="Profile-box-picture">
                    <img src={this.props.artistImageSrc} alt="" height="400px" width="250px" />
                    <div className="Profile" id="Profile-info-box">
                        <div className="Profile-box">
                            <p className="Text-box artistname">{this.props.artistName}</p>
                            <p className="Text-box artistname">{this.props.artistOccupation}</p>
                            <p className="Text-box artistname">{this.props.artistLocation}</p>
                            <p className="Text-box BioPtag">{this.props.artistBio}</p>
                        </div>  
                        <div className="editanddelete">
                            <div>
                                <Link to="/Profile/EditProfile">
                                    <button>Edit Profile</button>
                                </Link>
                            </div>
                            <div>
                                <button onClick={this.onDelete}>Delete Profile</button>
                            </div>
                            <div>
                                <Link to="/Profile/AddProfile">
                                    <button>Add Profile</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div id="Profile-box-review">
                    <div className="Reviewlinkbox">
                        <div className="Reviewlink">
                            <h1>View reviews</h1>
                            <h3>Username: {this.props.userName}:</h3>
                            <p>Review: {this.props.reviewText}</p>
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
                        </div>
                    </div>
                </div> */}

                );  </div>


        )
    }
}

export default Profile;