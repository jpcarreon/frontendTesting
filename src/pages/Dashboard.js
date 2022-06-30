/**
 * Main documentation/notes found on App.js
 */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checkedIfLoggedIn: false,
      isLoggedIn: null,
      username: localStorage.getItem("username")
    }

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // Send POST request to check if user is logged in
    fetch("http://localhost:3001/checkifloggedin",
      {
        method: "POST",
        credentials: "include"
      })
      .then(response => response.json())
      .then(body => {
        if (body.isLoggedIn) {
          this.setState({ checkedIfLoggedIn: true, isLoggedIn: true, username: localStorage.getItem("username")});
        } else {
          this.setState({ checkedIfLoggedIn: true, isLoggedIn: false });
        }
      });
  }

  logout(e) {
    e.preventDefault();

    // Delete cookie with authToken
    const cookies = new Cookies();
    cookies.remove("authToken");

    // Delete username in local storage
    localStorage.removeItem("username");

    this.setState({ isLoggedIn: false });
  }

  render() {
    if (!this.state.checkedIfLoggedIn) {
      // delay redirect/render
      return (<div></div>)
    }

    else {
      if (this.state.isLoggedIn) {
        // render the page
        return (
          <div>
            Welcome to the Dashboard, { this.state. username }

            <br />
            <button id="logout" onClick={this.logout}>Log Out</button>
          </div> 
        )
      }

      else {
        // redirect
        return <Redirect to="/" />
      }
    }
  }
}