import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class AboutMe extends Component {

  render () {
    return (
      <div className="about-me">
        <a name="AB-me"></a>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} id="head-shot">
            <h2>George Smith-Sweeper</h2>
            <Image src="../../public/images/rsz_headshot.jpg" rounded></Image>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} id="description">
            <h2>Who Am I?</h2>
            <p>
              <span>
                I enjoy solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp. Programming is essentially a puzzle that can be put together in many different ways, but the key is finding the most efficient way to do it.
              </span>
            </p>
          </Col>
          <Row>
          <Col xs={12} sm={6} md={6} lg={6} id="technologies">
              <Col xs={6} sm={4} md={4} lg={4}>
                <Image src="../../public/images/react-js.png" className="img-align"responsive ></Image>
              </Col>
              <Col xs={6} sm={4} md={4} lg={4}>
                <Image src="../../public/images/css3logo.png" className="img-align" responsive></Image>
              </Col>
              <Col xs={6} sm={4} md={4} lg={4}>
                <Image src="../../public/images/Boostrap_logo.svg.png" className="img-align"responsive></Image>
              </Col>
          </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
              // <Col xs={12} sm={12} md={6} lg={3}>
              //   <Image src="../../public/images/"></Image>
              // </Col>
              // <Col xs={12} sm={12} md={6} lg={3}>
              //   <Image src="../../public/images/"></Image>
              // </Col>
