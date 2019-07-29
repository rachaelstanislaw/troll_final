import React, { Component } from 'react'
import russnbeck from '../images/married.png'
import titanic from '../images/titanic.jpg'
import kiss from '../images/kiss.jpg'

export default class Testimonials extends Component {
    render(){
        return(
            <div>
                <div className="story">
                    <h2>Meet the happy couple..</h2>
                    <img src={russnbeck} className="couple-pic"/>
                    Russel and Becky met on Troll Tinder and have been together for 50 years
                </div>
                <br></br>
                <div className="story">
                    <h2>Meet the happy couple..</h2>
                    <img src={titanic} className="couple-pic"/>
                    Max and Balderdash got fondue on their first date. It was love at first cheese. Now they travel the world together on Max's yacht.
                </div>
                <br></br>
                <div className="story">
                    <h2>Meet the happy couple..</h2>
                    <img src={kiss} className="couple-pic"/>
                    Elouise and Bernadette. Have been eskimo kissing for three years...
                </div>
            </div>
        )
    }
}
