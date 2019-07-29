import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Trolls from './components/Trolls'
import NewTroll from './components/NewTroll'
import Header from './components/Header'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import {
    Col, Container, Row, ListGroup, Card
}   from 'react-bootstrap'
import './App.css'
import { getTrolls, createTroll } from './api'

import bubbles from './images/Bubbles.jpg'
import dirk from './images/Dirk.jpg'
import giblet from './images/Giblet.jpg'
import stacy from './images/Stacy.jpg'
import footer from './images/footer.png'



export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            trolls: [
            {
                id: 1,
                name: 'Bubbles',
                age: 21,
                image: bubbles,
                enjoys: "horses, taco bell, floral prints"
            },
            {
                id: 2,
                name: 'Dirk',
                age: 27,
                image: dirk,
                enjoys: 'crossfit, muscle milk, your mom'
            },
            {
                id: 3,
                name: 'Giblet',
                age: 306,
                image: giblet,
                enjoys: 'sorcery, hot dogs, astral projection'
            },
            {
                id: 4,
                name: 'Stacy',
                age: 40,
                image: stacy,
                enjoys: 'attention, glitter, KE$HA'
            }
            ]
        }
    }

    componentDidMount() {
        getTrolls()
	       .then(APItrolls => {
	            this.setState({
		            trolls: APItrolls
	        })
	    })
    }

    handleNewTroll(form) {
            createTroll(form)
        .then(successTroll => {
            console.log("SUCCESS! New Troll: ", successTroll);
        })
        // console.log(form);
    }

    render(){
        return(
            <div>
            <div>
                <NavBar />

                <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage }/>
                            <Route exact path="/trolls" render={( props) =>     <Trolls trolls={this.state.trolls}/>}
                            />
                            <Route exact path="/newtroll" render={( props) => <NewTroll updateArr={this.handleNewTroll}/>}
                            />
                            <Route exact path="/stories" component={ Testimonials}
                            />
                        </Switch>
                </Router>
            </div>
            </div>
        )
    }
}
