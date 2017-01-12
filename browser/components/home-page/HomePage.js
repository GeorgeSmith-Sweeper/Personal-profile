import React, { Component } from 'react';
import { Link } from 'react-router';
import LandingHeader from '../landing-header/LandingHeader';
import ProjectsSection from '../projects-section/ProjectsSection';

export default class HomePage extends Component {

  render () {
    return (
      <div className="container-fluid">
          <h1>Homepage</h1>
          <LandingHeader />
          <ProjectsSection />
      </div>
    );
  }
}
