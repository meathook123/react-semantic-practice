import React, { Component } from 'react';
import './Topnav.css';

class Topnav extends Component {
  render() {
    return (
      <nav>
        <a className={this.props.visible ? 'on toggle-icon' : 'toggle-icon'} onClick={this.props.buttonClick}><span></span></a>
        <span className="nav-title">Sample</span>
      </nav>
    );
  }
}

export default Topnav;
// <img src='/img/logo.png' alt="" onClick={this.props.buttonClick} className="nav-icon"/>