import React, { Component } from 'react'

export class nav extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <li className="nav-item">
                    <a style={{color:"white",padding:"15px"}}>My Contacts</a>
                </li>
          
          </nav>
        );
    }
}

export default nav
