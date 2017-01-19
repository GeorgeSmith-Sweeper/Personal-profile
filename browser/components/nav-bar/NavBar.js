import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';

/* uncomment to use react-bootstrap*/
//import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

export default class NavigationBar extends Component {

  render () {
    return (
      <Navbar brand='George Smith-Sweeper' right>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#ab-me">About Me</NavItem>
      </Navbar>
    );
  }
}
