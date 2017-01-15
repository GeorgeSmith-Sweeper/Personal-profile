import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';

/* uncomment to use react-bootstrap*/
//import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

export default class NavigationBar extends Component {

  render () {
    return (
      <div className="navbar-fixed navigation">
          <Navbar brand='George Smith-Sweeper' right>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href='#AB-me'>About Me</NavItem>
            <NavItem href='#contact'>Contact Me</NavItem>
          </Navbar>
      </div>
    );
  }
}
