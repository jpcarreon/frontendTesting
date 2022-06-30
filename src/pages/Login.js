import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login(e) {
        e.preventDefault();
        const credentials = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        }


        fetch (
            'http://localhost:3001/user/login',
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
            <h2>Log In</h2>
            <form>
                <input type="text" id="username" placeholder="Username" />&nbsp;
                <input type="password" id="password" placeholder="Password" />&nbsp;
                <button id="login" onClick={this.login}>Log In</button>
            </form>

            <br/> <br/>
            <a href='/sign-up'>
                <button>Sign Up</button>
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