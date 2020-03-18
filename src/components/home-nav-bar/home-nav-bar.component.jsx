import React from 'react';
import './home-nav-bar.styles.css';
import {Navbar} from 'react-bootstrap';

export const HomeNav = ({homepath}) => (
    <div>
    <Navbar className="navbar">
    <Navbar.Brand className="logo" href={homepath}>
    <span className="logo_open_tag">&#60; </span>
    <span className="logo_slash"> /</span>
    <span className="logo_close_tag">&#62;</span>

    </Navbar.Brand>
    </Navbar>
    </div>
)