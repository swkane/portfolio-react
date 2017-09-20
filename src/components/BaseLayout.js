import React from 'react';
import {Navbar, Nav, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <Link to="/"><NavbarBrand>reactstrap</NavbarBrand></Link>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/home"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/about"><NavLink>About</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/portfolio"><NavLink>Portfolio</NavLink></Link>
              </NavItem>
            </Nav>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}
