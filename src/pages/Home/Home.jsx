import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.styles.css'
import { SlideShow } from '../../components/slide-show/slide-show.component';
import SignIn from '../../components/sign-in/sign-in.component';
import { CSSTransition }  from 'react-transition-group';


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
            <Navbar className="navbar">
            <Navbar.Brand className="logo" href="/">
            <span className="logo_open_tag">&#60; </span>
            <span className="logo_slash"> /</span>
            <span className="logo_close_tag">&#62;</span>


            </Navbar.Brand>
            </Navbar>

            <Container>
            <div className="home-panel"/>
            <div className="left">
            <h1 className="home_title">CODE ONE</h1>
            <div className="subtitle">Design, build, and test your front end projects in our online playground. Develop with HTML, CSS, and JS and watch your projects come to life alongside your code!</div>
            <div className="signin">
            <button className="home-button" onClick={() => {this.updateHomeDisplay(SignIn)}}><span>Sign In</span></button>
            <button className="home-button"><span>Create Account</span></button>
            <button className="guest-button"><Link to='/playground'><span>Continue as Guest</span></Link></button>
            </div>
            </div>

                <CSSTransition
                in={false}
                timeout={1000}
                classNames="fade"
                >
                <HomeDisplay/>

                </CSSTransition>




            </Container>
            </div>
        );
    }
}

export default Home;