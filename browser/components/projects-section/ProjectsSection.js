import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


export default class ProjectsSection extends Component {

  render () {
    return (
      <div className="projects">
        <Row>
        <h1 id="projects-title">PROJECTS / TALKS</h1>
          <Col sm={12} md={4} lg={4}>
            <div className="statement">
              <h1>Loop</h1>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3pzsP2I7e3U" frameBorder="0" allowFullScreen></iframe>
              <p>
                <span>
                Completely re-imagines the student to teacher interaction model in the classroom
                </span>
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="statement">
              <h1>Tails</h1>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/A-LKDSz4Ik4" frameBorder="0" allowFullScreen></iframe>
              <p>
                <span>
                Hey, I'm George. I enjoy creating gorgeous applications,
                and making objects in virtual reality.
                </span>
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="statement">
              <h1>Cube Master</h1>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/PNkrEoNgo-A" frameBorder="0" allowFullScreen></iframe>
              <p>
                <span>
                Hey, I'm George. I enjoy creating gorgeous applications,
                and making objects in virtual reality.
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
