import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Topnav from './global/topnav/Topnav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topnav />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
