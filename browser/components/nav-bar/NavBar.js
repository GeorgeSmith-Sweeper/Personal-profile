import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

export default class NavigationBar extends Component {

  render () {
    return (
      <div className="navbar">
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">GSS</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">About</NavItem>
              <NavItem eventKey={2} href="#">Projects</NavItem>
              <NavItem eventKey={2} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
