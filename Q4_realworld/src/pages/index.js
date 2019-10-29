import React, { Component } from 'react'
import Nav from "../components/nav";
import Card from "../components/card";
import InfiniteScroll from "react-infinite-scroller";

export class index extends Component {
    constructor(props){
        super(props)
        this.state={
            items:null
        }
        this.renderData = this.renderData.bind(this)
    }
    componentDidMount(){
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(res => res.json())
            .then(res=> {
                console.log(res)
                this.setState({
                    items: res
                })
            })
    }
    renderData(){
        console.log(this.state.items)
        if (this.state.items !== null){
            return this.state.items.map(todo=>(
                    <Card 
                    name={todo.name}
                    email={todo.email}
                    phone={todo.phone}
                    website={todo.website}
                    company={todo.company.name}
                    />
                ))

        }
    }
    render() {
        return (
          <div>
            <Nav />
            <div class="row">
              <div class="card-group">
                <div class="col">{this.renderData()}</div>
              </div>
            </div>
          </div>
        );
    }
}

export default index
