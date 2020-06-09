import React from 'react';
import './logo.styles.css';
import {Navbar} from 'react-bootstrap';

export const Logo = () => (
    <Navbar.Brand className="logo" href='/'>
    <span className="logo_open_tag">&#60; </span>
    <span className="logo_slash"> /</span>
    <span className="logo_close_tag">&#62;</span>
    </Navbar.Brand>
);