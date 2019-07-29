import React, { Component } from 'react'
import icon from '../images/icon.jpg'
import {
    Form
}   from 'react-bootstrap'
import '../App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default class NewTroll extends Component {
    constructor(props){
    super(props)
        this.state = {
            form:{
              name: '',
              age: '',
              image: icon,
              enjoys: ''
            }
        }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleClick = () => {
        this.props.updateArr(this.state.form)
    }

    render(){
        return(
            <div class="form-test">

                <p>Name:</p>
                <Form.Control
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.form.name}
                />
                <p>Age:</p>
                <Form.Control
                    type="text"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.form.age}
                />
                <p>3 Things You Enjoy:</p>
                <Form.Control
                    type="text"
                    name="enjoys"
                    onChange={this.handleChange}
                    value={this.state.form.enjoys}
                />
                <button class="submit" type="submit" onClick={this.handleClick}>Submit</button>

            </div>
        )
    }
}
