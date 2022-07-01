import React, { Component } from "react";
import Header from "../components/Header";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.signup = this.signup.bind(this);
        this.logOut = this.logOut.bind(this);
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

        fetch(
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
                //console.log(body);
                if(body.success) {
                    alert("New account created!");
                } else {
                    alert(body.message);
                }
            })
    }

    logOut(e) {
        e.preventDefault();
        const token = prompt("Please enter your authorization token", "");

        fetch(
            'http://localhost:3001/user/logout',
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => response.json())
            .then(body => {
                console.log(body);
                if (body.success)
                    alert("Successfully Logged Out!");
                else
                    alert(body.message)
            })
    }

    render() {
        return (
            <div>
                <Header handleClick={this.logOut} signup={{ color: 'var(--default-primary-color)', fontWeight: '600' }} />
                <div className="content">
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
                </div>
            </div>
        )
    }
}