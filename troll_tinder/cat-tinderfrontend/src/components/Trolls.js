import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup, Card
}   from 'react-bootstrap'
import '../App.css'
import icon from '../images/icon.jpg'

export default class Trolls extends Component {
    render(){
        return(
            <div className="Container">
                {this.props.trolls.map((troll, index)=>{
                    return(
                        <Card className="Troll-card" bg="primary" style={{ width: '18rem', margin: '15px' }}>
                        <Card.Img variant="top" src={troll.image} className="Profile-pic" />
                        <Card.Body>
                            <Card.Title>{troll.name}</Card.Title>
                            <Card.Text>
                              <p>Age: {troll.age}</p>
                              <p> Enjoys: {troll.enjoys}</p>
                              <button type="button" class="btn btn-success" style={{ border: 'solid 1px white'}}>💋 Match</button>&nbsp;
                              <button type="button" class="btn btn-secondary" style={{ border: 'solid 1px white' }}>🤢 Pass</button>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
