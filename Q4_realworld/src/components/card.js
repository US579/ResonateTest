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
            <div class="container-fluid" >
                <div class="row">
                    <div class="card-deck">
                                <div class="card">
                                        <div class="card-block">
                                            <h4 class="card-text">{this.state.name}</h4>
                                            <p class="card-text">{this.state.email}</p>
                                            <p class="card-text">{this.state.website}</p>
                                            <p class="card-text"><small class="text-muted">{this.state.phone}</small></p>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
        );
    }
}

export default card
