import React, { Component } from 'react'
import Testimonials from './Testimonials'

export default class HomePage extends Component {
    render(){
        return(
            <div>
                <h1 className="Main-header"> Trolls need love too...</h1>
                <div className="Main-page">
                    Every 13 minutes, someone finds love on Troll Tinder. <br></br>
                    Because there's literally billions of Trolls.
                </div>
            </div>
        )
    }
}
