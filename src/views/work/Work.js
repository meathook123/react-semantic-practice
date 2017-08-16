import React, { Component } from 'react';
import { Grid, Button, Header, Image, Modal } from 'semantic-ui-react';
import './Work.css';

class Work extends Component {
  data = [
    {
      name: 'Palmdrive',
      description: 'Official Website',
      title: 'Palmdrive Official Website',
      img: 'img/work/work1.png',
      intro: [
        'PalmDrive is an education technology start-up aiming to redefine the future of international education through technology.',
        'I have worked at PalmDrive as an intern web developer for 5 months. As a fresh graduated student, I am so lucky to have this chance to work with these talented people.'
      ],
      work: [
        'My main contribution on this website was providing multi-language support using Rails Internationalization API and Angular-translate. I also did several front-end design and back-end works.'
      ]
    },
    {
      name: 'Xiaobandeng',
      description: 'Marketing Website',
      title: 'Xiaobandeng APP marketing website',
      img: 'img/work/work2.png',
      intro: [
        'Xiaobandeng is a mobile app developed by PalmDrive engineers. It is a platform for mentors to give online talks and communicate with students.'
      ],
      work: [
        'This is the homepage I designed using Ionic and AngularJS. I also made it responsive to different media queries.'
      ]
    },
    {
      name: 'HoneycombData',
      description: 'Official Website',
      title: 'HoneycombData Inc. Official Website',
      img: 'img/work/work3.png',
      intro: [],
      work: []
    }
  ];

  state = {
    open: false,
    selected: 0
  };

  show(number) {
    this.setState({ selected: number, open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { open, selected } = this.state;
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            {this.data.map((work, i) =>
              <Grid.Column key={i} width={8}>
                <figure className="snip0016">
                  <img src={work.img} alt={work.name}/>
                  <figcaption>
                    <h2><span>{work.name}</span></h2>
                    <p>{work.description}</p>
                    <a onClick={() => this.show(i)}> </a>
                  </figcaption>     
                </figure>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>

        <Modal dimmer="blurring" open={open} onClose={this.close.bind(this)}>
          <Modal.Header>{this.data[selected].title}</Modal.Header>
          <Modal.Content image>
            <Grid>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Image wrapped size='large' className="modal-img" src={this.data[selected].img} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  {this.data[selected].intro.map((intro, i) =>
                    <p key={i}>
                      {intro}
                    </p>
                  )}
                  {this.data[selected].work.map((work, i) =>
                    <p key={i}>
                      {work}
                    </p>
                  )}
                </Grid.Column>
              </Grid.Row>
            </Grid>
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