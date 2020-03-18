import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import './SignUp.styles.css';
import { SlideShow } from '../../components/slide-show/slide-show.component';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';

export const SignUpPage = () => (
    <div className="home">
        <HomeNav/>
        <div className="sign-up-page">
        <SignUp/>
        </div>
        <div className="sign-up-slide">
    <SlideShow/>
        </div>
    </div>
);