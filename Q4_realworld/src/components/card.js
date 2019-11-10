import React, { Component } from 'react'

export class card extends Component {
    constructor(props){
        super(props)
        this.state={
            name:this.props.name ,
            email:this.props.email ,
            phone:this.props.phone ,
            website:this.props.website

        }
    }
    render() {
        return (

                <div class="card-block">
                    <h4 class="card-text">{this.state.name}</h4>
                    <p class="card-text">{this.state.email}</p>
                    <p class="card-text">{this.state.website}</p>
                    <p class="card-text"><small class="text-muted">{this.state.phone}</small></p>
                </div>
           
        );
    }
}

export default card
