/** @format */

import React, { useState } from 'react';
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';

import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from 'reactstrap';

import { RoutesType } from '../../models/IAppProps';

interface LogoType {
  imgAlt: string;
  imgSrc: string;
  innerLink?: string;
  outterLink?: string;
}

interface SidebarRoutesProps {
  routes?: RoutesType[];
  logo?: LogoType;
}

const Sidebar: React.FC<SidebarRoutesProps> = (props) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes: RoutesType[]) => {
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
          <Nav navbar>{routes && createLinks(routes)}</Nav>
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

export default Sidebar;
