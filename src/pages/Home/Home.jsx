import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.styles.css'
import { SlideShow } from '../../components/slide-show/slide-show.component';



export const Home = () => (
    <div className="home">
    <h1 className="title">
    <span className="home_open_tag">&#60; </span>
    <span className="home_slash"> /</span>
    <span className="home_close_tag">&#62;</span>
    <span className="home_title">CODE ONE</span>
    </h1>

    <Container>
    <div className="home-panel"/>
    <div className="subtitle">Code One is the perfect playground for front end developers.
    Create your projects and watch your live browser update immediately along side your code!</div>
    <div><SlideShow className="slideshow"></SlideShow></div>
    <div className="sign-in">
    <button className="home-button"><span>Sign In</span></button>
    <button className="home-button"><span>Create Account</span></button>
    <button className="guest-button"><Link to='/playground'><span>Continue as Guest</span></Link></button>
    </div>
    </Container>
    </div>
);
