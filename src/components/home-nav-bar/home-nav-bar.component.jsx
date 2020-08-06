import React from "react";
import "./home-nav-bar.styles.css";
import { Navbar, Nav } from "react-bootstrap";
import { Logo } from "../logo/logo.component";
import ProfileButton from "../profile-button/profile-button.component";
import { useSelector } from "react-redux";
import SignOut from "../sign-out/sign-out.component";

export const HomeNav = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <Navbar collapseOnSelect expand="lg" className="home-navbar navbar-dark">
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <span className="menu-title">CODE ONE</span>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="toggle-icon"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto home-display">
          <Nav.Link href="/#top" className="home-link">
            Home
          </Nav.Link>
          <Nav.Link href="/#features" className="home-link">
            Features
          </Nav.Link>
          <Nav.Link href="/#blog-section" className="home-link">
            Blog
          </Nav.Link>

          <Nav.Link href="/#contact" className="home-link">
            Contact
          </Nav.Link>
        </Nav>

        <hr className="menu-hr"></hr>

        {currentUser ? (
          currentUser == "init" ? null : (
            <Nav>
              <Nav.Link href="/playground">
                <span className="display-button text">Playground</span>
              </Nav.Link>
              <ProfileButton className="location-home" />
              <SignOut className="sign-out-display" />
            </Nav>
          )
        ) : (
          <SignOut />
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
