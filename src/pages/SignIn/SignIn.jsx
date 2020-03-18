import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './SignIn.styles.css';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';


export const SignInPage = () => (
    <div className="home">
        <HomeNav/>
        <div className="sign-in-page">
        <SignIn className="sign-in-center"/>
        </div>
    </div>

)