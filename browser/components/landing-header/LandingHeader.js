import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingHeader extends Component {

  render () {
    return (
      <div className="row landing">
        <div className="col-md-6" id="left">
          <p>MyPicture</p>
        </div>
        <div className="col-md-6" id="right">
          <p>Intro</p>
        </div>
      </div>
    );
  }
}
