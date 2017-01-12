import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingHeader extends Component {

  render () {
    return (
      <div className="row">
        <div className="col-md-6">
          <p>MyPicture</p>
        </div>
        <div className="col-md-6">
          <p>Intro</p>
        </div>
      </div>
    );
  }
}
