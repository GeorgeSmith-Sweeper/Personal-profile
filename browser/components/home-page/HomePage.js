import React, { Component } from 'react';
import { Link } from 'react-router';
import LandingHeader from '../landing-header/LandingHeader';
import ProjectsSection from '../projects-section/ProjectsSection';
import NavigationBar from '../nav-bar/NavBar';
import AboutMe from '../about-me/AboutMe';

export default class HomePage extends Component {

  render () {
    return (
      <div className="container-fluid">
        <NavigationBar />
        <LandingHeader />
        <div className="divider"></div>
        <ProjectsSection />
        <div className="divider"></div>
        <AboutMe />
      </div>
    );
  }
}
