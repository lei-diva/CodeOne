import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import "./playgroundnavbar.styles.css";
import { DisplayButtons } from "../display-buttons/display-buttons.component";
import { Logo } from "../logo/logo.component";
import { ProjectName } from "../project-name/project-name.component";
import ExportButton from "../export-button/export-button.component";
import { SaveButton } from "../save-button/save-button.component";
import ProfileButton from "../profile-button/profile-button.component";
import { useSelector } from "react-redux";
import SignOut from "../sign-out/sign-out.component";

export const PlaygroundNavBar = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark">
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <Form inline>
        <ProjectName />
      </Form>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="toggle-icon"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto display">
          <DisplayButtons className="display_buttons" />
        </Nav>

        <hr className="menu-hr"></hr>
        <Nav className="exportsave">
          <ExportButton />
        </Nav>
        {currentUser ? (
          currentUser == "init" ? null : (
            <Nav>
              <SaveButton />
              <hr className="menu-hr"></hr>
              <Nav.Link href="/">
                <span className="display-button text">Home</span>
              </Nav.Link>
              <ProfileButton className="location-playground" />
              <SignOut className="sign-out-display" />
            </Nav>
          )
        ) : (
          <>
            <hr className="menu-hr"></hr>
            <SignOut />
          </>
        )}

        {/*}
                        <SignOut/>{*/}
      </Navbar.Collapse>
    </Navbar>
  );
};
