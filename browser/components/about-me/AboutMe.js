import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AboutMe extends Component {

  render () {
    return (
       <div className="about-me">
        <a name="ab-me"></a>
        <div className="row no-bottom-margin">
          <div className="col s12 m4 l3 head-shot">
            <img className="circle responsive-img" id="head-shot" src="../../public/images/rsz_headshot.jpg"/>
          </div>
          <div className="col s12 m8 l9">
            <h3>Who am I?</h3>
            <p>I am a new JavaScript developer who enjoys solving puzzles, and taking complex problems and explaining them in a way that is easy for anyone to grasp.</p>
            <p>Most of my projects have been built using React, Bootstrap, CSS, and JavaScript, but I also have experience with Unity, and Vueforia. This site will continue to evolve as my skill set grows, and frameworks change.</p>
            <p>Looking for help with a project? Reach out to me!</p>

            <div className="social">
              <a href="https://github.com/GeorgeSmith-Sweeper"><i id="github" className="fa fa-github-square" aria-hidden="true"> </i></a>
              <a href="https://www.linkedin.com/in/george-smith-sweeper-087b753a
"><i id="linkedin" className="fa fa-linkedin" aria-hidden="true"> </i></a>
              <a href="https://angel.co/george-smith-sweeper"><i id="angellist" className="fa fa-angellist" aria-hidden="true"> </i></a>
              <a href="mailto:george.smsweeper@gmail.com"><i id="mail" className="fa fa-envelope" aria-hidden="true"> </i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

