/** @format */

import React, { useState } from 'react';
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';

import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap';

interface RoutesType {
  path: string;
  name: string;
  icon: string;
  layout: string;
}

interface SidebarRoutesProps {
  routes?: RoutesType[];
}

const Sidebar: React.FC<SidebarRoutesProps> = (props) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes: object[]) => {
    return routes.map((prop: RoutesType, key: number) => {
      return (
        <NavItem key={key}>
          <NavLink to={prop.layout + prop.path} tag={NavLinkRRD} onClick={closeCollapse} activeClassName="active">
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: '_blank',
    };
  }

  return (
    <Navbar className="navbar-vertical fixed-left navbar-light bg-white" expand="md" id="sidenav-main">
      <Container fluid>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-4 pr-3" {...navbarBrandProps}>
            <img alt={logo.imgAlt} className="navbar-brand-img" src={logo.imgSrc} />
          </NavbarBrand>
        ) : null}
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Documentation</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="#">
                <i className="ni ni-spaceship" />
                Getting started
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

/* Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
}; */

export default Sidebar;
