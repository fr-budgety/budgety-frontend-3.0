/** @format */

import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';
import { LoginFormState } from '../../redux/store/types';

import { signOut } from '../../redux/actions/authActions';

import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from 'reactstrap';
import Avatar from 'react-avatar';

interface DashboardNavbarProps {
  userEmail?: string | undefined;
  displayName?: string | null;
  photoURL?: string | null;
  brandText: string;
  signOut: () => void;
}

const DashboardNavbar: React.SFC<DashboardNavbarProps & RouteComponentProps> = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to={location.pathname}>
            {props.brandText}
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    {props.photoURL ? (
                      <img alt={props.userEmail} src={props.photoURL} />
                    ) : (
                      <Avatar name={props.displayName ? props.displayName : props.userEmail} size="36" round="50%" />
                    )}
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">{props.userEmail && props.userEmail}</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span onClick={props.signOut}>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  userEmail: state.firebase.auth.email,
  photoURL: state.firebase.auth.photoURL,
  displayName: state.firebase.auth.displayName,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<LoginFormState, undefined, any>) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DashboardNavbar));
