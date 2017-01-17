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
            <Image src="../../public/images/rsz_headshot.jpg"></Image>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} id="description">
            <h2>Who Am I?</h2>
            <p>
              <span>I am a new JavaScript developer who enjoys solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp.
              </span>
            </p>
            <p>
              <span>Most of my projects have been built using React, Bootstrap, CSS, and JavaScript, but I also have experience with Unity, and Vueforia.
              </span>
            </p>
          </Col>



          <Col xs={12} sm={6} md={6} lg={6} id="technologies">
              <Col xs={6} sm={3} md={3} lg={3}>
                <Image src="../../public/images/react-js.png" responsive ></Image>
              </Col>
              <Col xs={6} sm={3} md={3} lg={3}>
                <Image src="../../public/images/css3logo.png" responsive></Image>
              </Col>
              <Col xs={6} sm={3} md={3} lg={3}>
                <Image src="../../public/images/Boostrap_logo.svg.png"responsive></Image>
              </Col>
              <Col xs={6} sm={3} md={3} lg={3}>
                <Image src="../../public/images/BlackJS.png"responsive></Image>
              </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
