import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AboutMe extends Component {

  render () {
    return (
       <div className="about-me">
        <a name="ab-me"></a>
        <div className="row no-margin">
          <div className="col s12 m4 l3">
            <img className="circle responsive-img head-shot" src="../../public/images/rsz_headshot.jpg"/>
          </div>
          <div className="col s12 m8 l9">
            <h3>Who am I?</h3>
            <p>I am a new JavaScript developer who enjoys solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp.</p>
            <p>Most of my projects have been built using React, Bootstrap, CSS, and JavaScript, but I also have experience with Unity, and Vueforia. This site will continue to evolve as my skill set grows, and frameworks change.</p>
            <p>Looking for help with a project? Reach out to me!</p>
          </div>
        </div>
      </div>
    );
  }
}

