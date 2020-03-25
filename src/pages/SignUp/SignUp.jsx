import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import './SignUp.styles.css';
import {Carousel} from 'react-bootstrap';
import first from '../../images/first-slide.png';
import second from '../../images/second-slide.png';
import third from '../../images/third-slide.png';
import fourth from '../../images/fourth-slide.png';
import fifth from '../../images/fifth-slide.png';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';
import {Link} from 'react-router-dom';

export const SignUpPage = () => (
    <div className="home">
        <HomeNav/>
        <div className="sign-in-nav-link">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/playground">Playground</Link></li>
            </div>
        <div className="sign-up-page">
        <SignUp/>
        </div>
        <div className="sign-up-slide">
        <Carousel interval="3000" prevIcon={<span id="prevIcon">&#60;</span>} nextIcon={<span id="nextIcon">&#62;</span>}>
  <Carousel.Item className="sign-up-item">
            <img className="sign-up-slides" src={first}></img>
  </Carousel.Item>

  <Carousel.Item className="sign-up-item">
  <img className="sign-up-slides" src={second}></img>
  </Carousel.Item>

  <Carousel.Item className="sign-up-item">
  <img className="sign-up-slides" src={third}></img>
  </Carousel.Item>

  <Carousel.Item className="sign-up-item">
            <img className="sign-up-slides" src={fourth}></img>

  </Carousel.Item>

  <Carousel.Item className="sign-up-item">
            <img className="sign-up-slides" src={fifth}></img>

  </Carousel.Item>
</Carousel>
        </div>
    </div>
);