import React, { Component } from 'react';
import { Link } from 'react-router';
import LandingHeaderContainer from '../landing-header/LandingHeaderContainer';
import ProjectsSectionContainer from '../projects-section/ProjectsSectionContainer';
import NavigationBar from '../nav-bar/NavBar';
import AboutMeContainer from '../about-me/AboutMeContainer';

export default class HomePage extends Component {

  render () {
    return (
      <div>
        <NavigationBar />
        <LandingHeaderContainer />
        <div className="divider"></div>
        <ProjectsSectionContainer />
        <div className="divider"></div>
        <AboutMeContainer />
      </div>
    );
  }
}
