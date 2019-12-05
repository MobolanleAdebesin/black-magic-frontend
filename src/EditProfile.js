import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import "./EditProfile.css";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchName: "",
            resultArtist: [],
            name: "",
            occupation: "",
            bio: "",
            location: "",
            image: ""
        }
        this.onSearchName = this.onSearchName.bind(this);
        this.onFindProfile = this.onFindProfile.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeoccupation = this.onChangeoccupation.bind(this);
        this.onChangebio = this.onChangebio.bind(this);
        this.onChangelocation = this.onChangelocation.bind(this);
        this.onChangeimage = this.onChangeimage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSearchName(evt) {
        this.setState({
            searchName: evt.target.value
        });
    }

    onChangeName(evt) {
        this.setState({
            name: evt.target.value
        });
    }
    onChangeoccupation(evt) {
        this.setState({
            occupation: evt.target.value
        });
    }
    onChangelocation(evt) {
        this.setState({
            location: evt.target.value
        });
    }
    onChangebio(evt) {
        this.setState({
            bio: evt.target.value
        });
        console.log(this.state.bio)
    }
    onChangeimage(evt) {
        this.setState({
            image: evt.target.value
        });
    }

    onFindProfile(evt) {
        evt.preventDefault();
        Axios.get(`https://black-magic-api.herokuapp.com/artists/name/${this.state.searchName}`)
            .then(res => {
                this.setState({
                    resultArtist: res.data,
                    name: res.data[0].name,
                    occupation: res.data[0].occupation,
                    location: res.data[0].location,
                    bio: res.data[0].bio,
                    image: res.data[0].image
                })
                console.log(this.state)
            })
            .catch(err => {
                console.log(err)
            })
    }

    onSubmit(evt) {
        evt.preventDefault();
        const Profile = {
            name: this.state.name,
            occupation: this.state.occupation,
            location: this.state.location,
            bio: this.state.bio,
            image: this.state.image
        }
        console.log(Profile);

        const Url = (`https://black-magic-api.herokuapp.com/artists/update/${this.state.name}`);

        Axios.put(Url, Profile)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            name: "",
            occupation: "",
            location: "",
            bio: "",
            image: ""
        })
    }



    render() {
        return (
            <div className="AddHairdresserForm">
                <div className="topform">
                    <h1>Find your name to Edit your Profile!</h1>
                    <div>
                        <input className="topforminput" type="text" value={this.state.searchName} placeholder="Name" onChange={this.onSearchName} />
                        <div className="Button-div" onClick={this.onFindProfile}>
                            <p className="Button-div-ptag">Find Artist Profile</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={this.onSubmit}>
                    {this.state.resultArtist.map((artist, index) => {
                        console.log(artist)
                        return (
                            
                                <div>
                                    <div>
                                        <input type="text" value={this.state.name} placeholder="Name" onChange={this.onChangeName} />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.occupation} placeholder="occupation" onChange={this.onChangeoccupation} />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.location} placeholder="location" onChange={this.onChangelocation} />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.bio} placeholder="bio" onChange={this.onChangebio} />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.image} placeholder="image_url" onChange={this.onChangeimage} />
                                    </div>
                                    <div>
                                        <input type="submit" placeholder="Create New Profile" />
                                    </div>
                                </div>
                            
                        )})}
                </form>
            </div>

        )
    }
}

export default EditProfile;