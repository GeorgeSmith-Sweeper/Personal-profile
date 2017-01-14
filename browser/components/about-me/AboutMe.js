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
                s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
