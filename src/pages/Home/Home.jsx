import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.styles.css'
import { SlideShow } from '../../components/slide-show/slide-show.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';


class Home extends React.Component{
    constructor () {
        super();
        this.state={
            homedisplay:SlideShow
        }
    }

    updateHomeDisplay = (dis) => {
        this.setState({homedisplay:dis});
    }

    render() {
        const HomeDisplay = this.state.homedisplay;

        return (
            <div className="home">
                <HomeNav homepath='/'/>
            <Container>
            <div className="home-panel"/>
            <div className="left">
            <h1 className="home_title">CODE ONE</h1>
            <div className="subtitle">Design, build, and test your front end projects in our online playground. Develop with HTML, CSS, and JS and watch your projects come to life alongside your code!</div>
            <div className="signin">
            <button className="home-button" onClick={() => {this.updateHomeDisplay(SignIn)}}><span>Sign In</span></button>
            <button className="home-button" onClick={() => {this.updateHomeDisplay(SignUp)}}><span>Create Account</span></button>
            <button className="guest-button"><Link to='/playground'><span>Continue as Guest</span></Link></button>
            </div>
            </div>


                <HomeDisplay/>






            </Container>
            </div>
        );
    }
}

export default Home;