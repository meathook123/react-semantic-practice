import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { CSSTransitionGroup } from 'react-transition-group';

import Topnav from './global/topnav/Topnav';
import Work from './views/work/Work';
import Gallery from './views/gallery/Gallery';
import About from './views/about/About';
import { Container, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

class App extends Component {
  state = { visible: false };
  pages = {
    '/': Work,
    '/gallery': Gallery
  };

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const Nav = withRouter(props => <Topnav {...props}/>);
    const { visible } = this.state;
    return (
      <Router>
        <Route render={({ location }) => (
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
              <Link to="/">
                <Menu.Item name='suitcase'>
                  <Icon name='suitcase' />
                  Work
                </Menu.Item>
              </Link>
              <Link to="/gallery">
                <Menu.Item name='paint brush'>
                  <Icon name='paint brush' />
                  Gallery
                </Menu.Item>
              </Link>
              <Link to="/about">
                <Menu.Item name='smile'>
                  <Icon name='smile' />
                  About
                </Menu.Item>
              </Link>
            </Sidebar>
            <Sidebar.Pusher >
              <Segment basic className="content">
                <Nav visible={this.state.visible} buttonClick={this.toggleVisibility.bind(this)}></Nav>
                <Container className="page-container">
                  <CSSTransitionGroup
                    component="div"
                    className="transition-container"
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                      <Switch key={location.key} location={location}>
                        <Route exact path='/' component={Work} />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/about' component={About} />
                      </Switch>
                    </CSSTransitionGroup>
                </Container>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )}/>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
