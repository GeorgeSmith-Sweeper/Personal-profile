import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ProjectsSection extends Component {

  render () {
    return (
      <div className="row">
        <div className="col-md-6" id="projects-left">
          <p>My Projects</p>
        </div>
        <div className="col-md-6" id="projects-right">
          <p>Image of projects</p>
        </div>
      </div>
    );
  }
}
