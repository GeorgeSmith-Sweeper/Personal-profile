import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Image } from 'react-bootstrap';

export default class AboutMe extends Component {

  render () {
    return (
      <Row className="about-me no-margin">
        <a name="AB-me"></a>
          <Col xs={12} sm={12} md={8} lg={8} id="description">
            <h2>Who Am I?</h2>
            <p>
              <span>I am a new JavaScript developer who enjoys solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp.
              </span>
            </p>
            <p>
              <span>Most of my projects have been built using React, Bootstrap, CSS, and JavaScript, but I also have experience with Unity, and Vueforia. This site will continue to evolve as my skill set grows, and frameworks change.
              </span>
            </p>
            <p>
              <span>
                Looking for help with a project? Reach out to me!
              </span>
            </p>
          </Col>
        </Row>
    );
  }
}

//  contains all tech icons
          // <div className="tech_parent">
          //   <Col xs={12} sm={12} md={12} lg={6} id="technologies">
          //     <Col xs={12} sm={3} md={6} lg={3}>
          //       <Image src="../../public/images/react-js.png" responsive ></Image>
          //     </Col>
          //     <Col xs={12} sm={3} md={6} lg={3}>
          //       <Image src="../../public/images/css3logo.png" responsive></Image>
          //     </Col>
          //     <Col xs={12} sm={3} md={6} lg={3}>
          //       <Image src="../../public/images/Boostrap_logo.svg.png"responsive></Image>
          //     </Col>
          //     <Col xs={12} sm={3} md={6} lg={3}>
          //       <Image src="../../public/images/BlackJS.png"responsive></Image>
          //     </Col>
          //   </Col>
          // </div>
