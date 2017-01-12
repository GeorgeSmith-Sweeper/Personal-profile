import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LandingBanner extends Component {

  render () {
    return (
    <div>
      <div className="col-lg-6" id="left">
        <p>MY PHOTO WILL GO HERE</p>
      </div>
      <div className="col-lg-6" id="right">
        <p>GEORGE SMITH-SWEEPER</p>
        <p>Developer</p>
        <p>VR Evangelist</p>
        <p>Automotive Enthusiast</p>
      </div>
    </div>
    )
  }
}
