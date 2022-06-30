import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.signup = this.signup.bind(this);
    }

    signup(e) {
        e.preventDefault();

        const credentials = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value
        }

        fetch (
            'http://localhost:3001/user',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
            <h2>Sign Up</h2>
            <form>
                <input type="text" id="username" placeholder="Username" />
                <br /><br />
                <input type="password" id="password" placeholder="Password" />
                <br /><br />
                <input type="text" id="email" placeholder="Email" />
                <br /><br />
                <input type="text" id="firstName" placeholder="First Name" />
                <br /><br />
                <input type="text" id="lastName" placeholder="Last Name" />
                <br /><br />
                <button id="signup" onClick={this.signup}>Sign Up</button>
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
            <a href='/edit-profile'>
                <button>Edit Profile</button>
            </a>
        </div>
        )
    }
}