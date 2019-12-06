import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignoutMenu from "../Menus/SignoutMenu";
import SigninMenu from "../Menus/SigninMenu";

class NavBar extends Component {
  state = {
    authonticated: false
  };

  handleSignIn = () => this.setState({ authonticated: true });
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
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
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
            <SignoutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
