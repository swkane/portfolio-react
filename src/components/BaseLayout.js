import React from 'react';
import {Navbar, Nav, NavbarBrand, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavLink exact to="/" activeStyle={{color: "black"}}><NavbarBrand>Splash Page</NavbarBrand></NavLink>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink activeClassName="selected" to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="selected" to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="selected" to="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="selected" to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="selected" to="/references">References</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}
