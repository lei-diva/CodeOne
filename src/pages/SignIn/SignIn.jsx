import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './SignIn.styles.css';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';
import {Link} from 'react-router-dom';

import Scrollspy from 'react-scrollspy';

export const SignInPage = () => (
    <div className="home">
        <HomeNav className="home-nav"/>
        <div className="sign-in-nav-link">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/playground">Playground</Link></li>
            </div>
        <div className="sign-in-page">
        <SignIn className="sign-in-center"/>
        </div>
    </div>

)