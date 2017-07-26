import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Topnav from './global/topnav/Topnav';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Menu.Item name='suitcase'>
            <Icon name='suitcase' />
            Work
          </Menu.Item>
          <Menu.Item name='paint brush'>
            <Icon name='paint brush' />
            Gallery
          </Menu.Item>
          <Menu.Item name='smile'>
            <Icon name='smile' />
            About
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher >
          <Segment basic>
            <div >
              <Topnav visible={this.state.visible} buttonClick={this.toggleVisibility.bind(this)}></Topnav>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
