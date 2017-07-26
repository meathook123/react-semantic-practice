import React, { Component } from 'react';
import './Topnav.css';
import { Button, Icon } from 'semantic-ui-react'

class Topnav extends Component {
  render() {
    return (
      <nav>
        <Icon name='list layout' onClick={this.props.buttonClick} className="nav-icon"/>
        <span className="nav-title">Sample</span>
      </nav>
    );
  }
}

export default Topnav;
// <img src='/img/logo.png' alt="" onClick={this.props.buttonClick} className="nav-icon"/>