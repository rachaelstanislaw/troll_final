import React, { Component } from 'react'

export default class NavBar extends Component {
    render(){
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="http://localhost:3001/">Troll Tinder</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <a class="nav-link" href="http://localhost:3001/trolls">Trolls near you</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="http://localhost:3001/newtroll">Create Profile</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="http://localhost:3001/stories">Testimonials</a>
            </li>
            </ul>

            </div>
            </nav>
            </div>
        )
    }
}
