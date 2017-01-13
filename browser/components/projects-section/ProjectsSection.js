import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


export default class ProjectsSection extends Component {

  render () {
    return (
      <Grid fluid={true}>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12} id="projects">
              <p>Projects</p>
            </Col>
        </Row>
      </Grid>
    );
  }
}
