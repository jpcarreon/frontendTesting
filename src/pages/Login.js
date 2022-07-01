import React, { Component } from "react";

import Header from "../components/Header";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null
        }

        this.login = this.login.bind(this);
        this.logOut = this.logOut.bind(this);
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
                if (body.success) {
                    alert("Successfully Logged In!");
                    this.setState({ result: body.token });
                } else 
                    alert(body.message);
            })
    }

    logOut(e) {
        e.preventDefault();
        const token = prompt("Please enter your authorization token", "");

        fetch (
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
            <Header handleClick={this.logOut} login={{ color: 'var(--default-primary-color)', fontWeight: '600' }} />
            <div className="content">
                <h2>Log In</h2>
                <form>
                    <input type="text" id="username" placeholder="Username" />&nbsp;
                    <input type="password" id="password" placeholder="Password" />&nbsp;
                    <button id="login" onClick={this.login}>Log In</button>

                    {
                        this.state.result ?
                        <div>
                            <br/>
                            <p>Token: {this.state.result}</p>
                        </div>
                        :
                        <div></div>
                    }
                </form>
            </div>
        </div>
        )
    }
}