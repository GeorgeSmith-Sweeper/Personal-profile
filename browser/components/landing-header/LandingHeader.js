import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';

export default class LandingHeader extends Component {

  render () {
    return (
      <div className="container-fluid landing">
        <Row>
          <Col sm={12}>
            <div className="statement">
              <h1>FRONT-END DEVELOPER / VR ENTHUSIAST</h1>
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
