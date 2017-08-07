import React, { Component } from 'react';
import { Grid, Button, Header, Image, Modal } from 'semantic-ui-react';
import './Work.css';

class Work extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false,
  //     data: [
  //       {
  //         name: 'Palmdrive Website',
  //         img: 'img/work/1.jpg',
  //         description: ''
  //       },
  //       {
  //         name: 'Xiaobandeng',
  //         img: 'img/work/2.jpg',
  //         description: ''
  //       },
  //       {
  //         name: 'HoneycombData Website',
  //         img: 'img/ads.jpg',
  //         description: ''
  //       }
  //     ],
  //     selectData: {}
  //   };
  // }

  state = {
    open: false,
    data: [
      {
        name: 'Palmdrive Website',
        img: 'img/work/1.jpg',
        description: ''
      },
      {
        name: 'Xiaobandeng',
        img: 'img/work/2.jpg',
        description: ''
      },
      {
        name: 'HoneycombData Website',
        img: 'img/ads.jpg',
        description: ''
      }
    ],
    selected: 0
  };

  show(number) {
    this.setState({ selected: number, open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { open, selected, data } = this.state;
    return (
      <div>
        <h3 className="page-title">Work</h3>
        <Grid stackable>
          <Grid.Row columns={3}>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={4}>
              <figure className="snip0016">
                <img src="/img/work/work1.png" alt="palmdrive"/>
                <figcaption>
                  <h2><span>Palmdrive</span></h2>
                  <p>Official Website.</p>
                  <a onClick={() => this.show(0)}></a>
                </figcaption>     
              </figure>
            </Grid.Column>
            <Grid.Column width={4}>
              <figure className="snip0016">
                <img src="/img/work/work2.png" alt="xiaobandeng"/>
                <figcaption>
                  <h2><span>Xiaobandeng</span></h2>
                  <p>Xiaobandeng APP marketing site.</p>
                  <a onClick={() => this.show(1)}></a>
                </figcaption>     
              </figure>
            </Grid.Column>
            <Grid.Column width={4}>
              <figure className="snip0016">
                <img src="/img/work/work3.png" alt="honeycombdata"/>
                <figcaption>
                  <h2><span>HoneycombData</span></h2>
                  <p>HoneycombData Inc. Official Website.</p>
                  <a onClick={() => this.show(2)}></a>
                </figcaption>     
              </figure>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Modal dimmer="blurring" open={open} onClose={this.close.bind(this)}>
          <Modal.Header>{data[selected].name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={data[selected].img} />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close.bind(this)}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Work;
// <img src='/img/logo.png' alt="" onClick={this.props.buttonClick} className="nav-icon"/>