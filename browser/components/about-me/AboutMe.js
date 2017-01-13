import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

export default class AboutMe extends Component {

  render () {
    return (
      <Grid fluid={true} className="about-me">
        <Row>

            <Col xs={12} sm={5} md={5} lg={5} id="head-shot">
              <p>PICTURE</p>
            </Col>

            <Col xs={12} sm={7} md={7} lg={7} id="description">
              <p>DESCRIPTION</p>
            </Col>

        </Row>
      </Grid>
    );
  }
}
