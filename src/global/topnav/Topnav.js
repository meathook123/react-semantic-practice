import React, { Component } from 'react';
import './Topnav.css';

class Topnav extends Component {
  routeMap = {
    '/': 'Work',
    '/gallery': 'Gallery',
    '/about': 'About'
  }
  render() {
    return (
      <nav>
        <a className={this.props.visible ? 'on toggle-icon' : 'toggle-icon'} onClick={this.props.buttonClick}><span></span></a>
        <h3 className="nav-title">Ruiyang Sun</h3>
        <h3 className="nav-title secondary">{this.routeMap[this.props.location.pathname]}</h3>
      </nav>
    );
  }
}

export default Topnav;
// <img src='/img/logo.png' alt="" onClick={this.props.buttonClick} className="nav-icon"/>