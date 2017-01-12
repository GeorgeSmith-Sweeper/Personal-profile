import React, { Component } from 'react';
import LandingBanner from '../Components/landing-banner/LandingBanner';

export default class App extends Component {

  render () {
    return (
      <div className="row">
          <LandingBanner />
      </div>
    )
  }
}
