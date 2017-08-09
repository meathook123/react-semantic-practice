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
        'Palmdrive is ...',
        'Worked on website'
      ],
      work: []
    },
    {
      name: 'Xiaobandeng',
      description: 'Marketing Website',
      title: 'Xiaobandeng APP marketing website',
      img: 'img/work/work2.png',
      intro: [],
      work: []
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
            <Image wrapped size='medium' src={this.data[selected].img} />
            <Modal.Description>
              <Header>Intro</Header>
              {this.data[selected].intro.map((intro, i) =>
                <p key={i}>
                  {intro}
                </p>
              )}
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