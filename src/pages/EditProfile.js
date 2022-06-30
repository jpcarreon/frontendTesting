import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.editProfile = this.editProfile.bind(this);
    }

    editProfile(e) {
        e.preventDefault();

        const credentials = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value
        }

        const token = prompt("Please enter your authorization token", "");

        fetch (
            'http://localhost:3001/user',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(credentials)
            })
            .then(response => response.json())
            .then(body => {
                console.log(body);
            })
    }

    render() {
        return (
        <div>
            <h2>Edit User Credentials</h2>
            <form>
                <input type="text" id="username" placeholder="Username" />
                <br /><br /><br /><br />
                <input type="password" id="password" placeholder="New Password" />
                <br /><br />
                <input type="text" id="email" placeholder="New Email" />
                <br /><br />
                <input type="text" id="firstName" placeholder="New First Name" />
                <br /><br />
                <input type="text" id="lastName" placeholder="New Last Name" />
                <br /><br />
                <button id="editProfile" onClick={this.editProfile}>Edit Profile</button>
            </form>

            <br/> <br/>
            <a href='/log-in'>
                <button>Log In</button>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/search'>
                <button>Search</button>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/sign-up'>
                <button>Sign Up</button>
            </a>
        </div>
        )
    }
}