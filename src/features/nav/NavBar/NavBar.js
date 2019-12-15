import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignoutMenu from "../Menus/SignoutMenu";
import SigninMenu from "../Menus/SigninMenu";
import { connect } from "react-redux";
import { openModal } from "../../modals/modalActions";

const actions = {
  openModal
};

class NavBar extends Component {
  state = {
    authonticated: false
  };

  handleSignIn = () => this.props.openModal("LoginModal");

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.setState({ authonticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authonticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authonticated ? (
            <SigninMenu signOut={this.handleSignOut} />
          ) : (
            <SignoutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(null, actions)(NavBar));
