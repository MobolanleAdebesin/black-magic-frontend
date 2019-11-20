import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";

class AddHairdresserForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: "",
        occupation: "",
        bio: "",
        location: "",
        image: ""    
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeoccupation = this.onChangeoccupation.bind(this);
    this.onChangebio = this.onChangebio.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
}
onChangeimage(evt) {
    this.setState({
        image: evt.target.value
    });
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

    Axios.post('http://localhost:4000/artists/add', Profile)
    .then(res => console.log (res.data))
    .catch(err => console.log(err))

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
                <h1>Welcome! we are glad you're here</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <h1>Sign Up</h1>
                    <div>
                    <input type="text" value={this.state.name} placeholder="Name" onChange={this.onChangeName}/>
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
                </form>
            </div>
        )
    }
}
export default AddHairdresserForm;