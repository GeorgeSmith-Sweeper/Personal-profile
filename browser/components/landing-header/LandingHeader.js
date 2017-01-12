import React, { Component } from 'react';
import { Link } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

const landingList = ['Developer', 'VREnthusiast', 'Tinkerer']

export default class LandingHeader extends Component {

  render () {
    return (
      <div className="landing">
        <Jumbotron>
          <h1>George Smith-Sweeper</h1>
          <ul className="landing-list">
          {
            landingList.map((element, i) => {
              return <li key={i}>{element}</li>
            })
          }
          </ul>
        </Jumbotron>
      </div>
    );
  }
}
