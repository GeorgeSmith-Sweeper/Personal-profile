import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class AboutMe extends Component {

  render () {
    return (
      <div className="about-me">
        <a name="AB-me"></a>
        <Row>
          <Col xs={12} sm={5} md={5} lg={5} id="head-shot">
            <h1>George Smith-Sweeper</h1>
            <img src="../../public/images/rsz_headshot.jpg"></img>
          </Col>

          <Col xs={12} sm={7} md={7} lg={7} id="description">
            <h1>Who Am I?</h1>
            <p>
              <span>
                I enjoy solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp. Programming is essentially a puzzle that can be put together in many different ways, but the key is finding the most efficient way to do it.
              </span>
            </p>
          </Col>
          <Col xs={12} sm={7} md={7} lg={7} id="description">
            <h1>Skills</h1>
            <p>
              <span>
                I enjoy solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp. Programming is essentially a puzzle that can be put together in many different ways, but the key is finding the most efficient way to do it.
              </span>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
