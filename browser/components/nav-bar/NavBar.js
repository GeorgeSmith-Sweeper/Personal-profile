import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';

/* uncomment to use react-bootstrap*/
//import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

export default class NavigationBar extends Component {

  render () {
    return (
      <div className="navbar-fixed navigation">
        <Navbar brand='logo' right>
          <NavItem href='#AB-me'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </div>
    );
  }
}
        // <Navbar fixedTop collapseOnSelect>
        //   <Navbar.Header>
        //     <Navbar.Brand>
        //       <a href="#">GSS</a>
        //     </Navbar.Brand>
        //     <Navbar.Toggle />
        //   </Navbar.Header>
        //   <Navbar.Collapse>
        //     <Nav pullRight>
        //       <NavItem eventKey={1} href="#projects">Projects</NavItem>
        //       <NavItem eventKey={2} href="#AB-me">About</NavItem>
        //       <NavItem href="#contact">Contact</NavItem>
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>
