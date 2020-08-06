import React from "react";
import { Row, Col } from "react-bootstrap";
import "./footer.styles.css";
import Github from "../../images/github.png";
import LinkedIn from "../../images/linkedin.png";

export const Footer = props => (
  <Row>
    <footer className={`footer ${props.position}`}>
      <Row>
        <Col>
          <div>
            <span className="footer_open_tag">&#60; </span>
            <span className="footer_slash big"> /</span>
            <span className="footer_close_tag big">&#62;</span>
          </div>

          <h1 className="footer-title"> CODE ONE </h1>
        </Col>
        <Col className="social-media">
          <a href="https://github.com/lei-diva/CodeOne">
            <img className="footer-icon" src={Github} />
          </a>
          <a href="https://www.linkedin.com/in/diva-lei-68b20b13b/">
            <img className="footer-icon" src={LinkedIn} />
          </a>
        </Col>
      </Row>
      <hr className="footer-hr"></hr>
      <Row>
        <Col lg>
          <p class="footer-copyright">Copyright © 2020 Code One, Diva L.</p>
        </Col>
        <Col lg>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">
                Terms of use
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">
                Privacy Policy
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="footer-nav-link">
                Cookie Policy
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  </Row>
);
