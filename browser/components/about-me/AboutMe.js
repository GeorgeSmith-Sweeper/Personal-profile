import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class AboutMe extends Component {

  render () {
    return (
      <div className="about-me">
        <Row>
          <Col xs={12} sm={5} md={5} lg={5} id="head-shot">
            <h1>George Smith-Sweeper</h1>
            <img src="../../public/images/rsz_headshot.jpg"></img>
          </Col>

          <Col xs={12} sm={7} md={7} lg={7} id="description">
            <h1>Who Am I?</h1>
            <p><span>Based out of brooklyn</span></p>
          </Col>
        </Row>
      </div>
    );
  }
}
