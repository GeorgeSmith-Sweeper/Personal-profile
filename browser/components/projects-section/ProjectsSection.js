import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


export default class ProjectsSection extends Component {

  render () {
    return (
      <div className="projects">
        <Row>
        <h1 id="projects-title">Projects / Talks</h1>
          <Col sm={12} md={4} lg={4}>
            <div className="statement">
              <h1>LOOP</h1>
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
              <h1>Tails</h1>
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
