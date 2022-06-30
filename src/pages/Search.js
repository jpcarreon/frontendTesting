import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null
        }

        this.search = this.search.bind(this);
    }

    search(e) {
        e.preventDefault();
        let username = document.getElementById("username").value;

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

    render() {
        return (
        <div>
            <h2>Search</h2>
            <form>
                <input type="text" id="username" placeholder="Username" />&nbsp;
                <button id="search" onClick={this.search}>Search</button>
            </form>

            {
                this.state.result ?
                <div>
                    <h3>{ this.state.result.username + " " + this.state.result.email } </h3>
                    <p>{ this.state.result.firstName + " " + this.state.result.lastName } </p>
                </div>
                :
                <div></div>
            }

            <br/> <br/>
            <a href='/sign-up' className='nostyle'>
                <button className='center primary button break'>Sign Up</button>
            </a>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href='/log-in' className='nostyle'>
                <button className='center primary button break'>Log In</button>
            </a>
        </div>
        )
    }
}