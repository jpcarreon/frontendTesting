import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null
        }

        this.search = this.search.bind(this);
        this.delete = this.delete.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    search(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;

        fetch (
            'http://localhost:3001/user/?username=' + (username ? username : " "),
            { method: 'GET' })
            .then(response => response.json())
            .then(body => {
                if (body.success) {
                    this.setState({ result: body.data })
                } else {
                    this.setState({ result: null })
                }
            })
    }
    
    delete(e) {
        e.preventDefault();
        const username = this.state.result.username;
        const token = prompt("Please enter your authorization token", "");
        
        fetch (
            'http://localhost:3001/user/?username=' + username,
            {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(response => response.json())
            .then(body => {
                console.log(body);
                if (body.success)
                    alert("Successfully Deleted User!");
                else 
                    alert(body.message)
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
            <div className="content">
                <h2>Search</h2>
                <form>
                    <input type="text" id="username" placeholder="Username" />&nbsp;
                    <button id="search" onClick={this.search}>Search</button>
                </form>

                {
                    this.state.result ?
                    <div>
                        <h3>{ this.state.result.username + " (" + this.state.result.email + ")"} </h3>
                        <p>{ this.state.result.firstName + " " + this.state.result.lastName } </p>
                        <button onClick={this.delete}>Delete</button>
                    </div>
                    :
                    <div></div>
                }

                <br/> <br/>
                <a href='/sign-up' >
                    <button >Sign Up</button>
                </a>

                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href='/log-in'>
                    <button >Log In</button>
                </a>

                &nbsp;&nbsp;&nbsp;&nbsp;

                <button onClick={this.logOut}>Log Out</button>
            </div>

        </div>
        )
    }
}