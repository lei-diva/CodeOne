import React from 'react';
import {Container, Row, Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.styles.css'
import { SlideShow } from '../../components/slide-show/slide-show.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';
import Face from '../../face.jpeg';
import { auth} from '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom';


class Home extends React.Component{
    constructor (props) {
        super(props);
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
                <HomeNav className="home-nav" homepath='/'/>
            <Container className="home-demo">

            <div className="left">
            <h1 className="home_title">CODE ONE</h1>
            <div className="subtitle">Design, build, and test your front end projects in our online playground. Develop with HTML, CSS, and JS and watch your projects come to life alongside your code!</div>

            {
                this.props.currentUser?
                    (
                        <div className="signin">
                        <button className="home-button" onClick={() => {this.props.history.push('profile')}}><span>Profile</span></button>
                        <button className="home-button" onClick={() => {this.props.history.push('playground')}}><span>Playground</span></button>
                        <button className="guest-button" onClick={()=>{
                                                                        auth.signOut();
                                                                        this.props.history.push('/');
                                                                        }}
                        >Sign Out</button>
                        </div>
                    )
                    :
                    (
                        <div className="signin">
                        <button className="home-button" onClick={() => {this.updateHomeDisplay(SignIn)}}><span>Sign In</span></button>
                        <button className="home-button" onClick={() => {this.updateHomeDisplay(SignUp)}}><span>Create Account</span></button>
                        <button className="guest-button" onClick={() => {this.props.history.push('playground')}} >Continue as Guest</button>
                        </div>
                    )
            }







            </div>
            <div className="right">
            <HomeDisplay/>
            </div>

            </Container>
            <Row className="about">
                <img className="face" src={Face}/>
                <div className="about-text">
                <span className="about_title">About</span>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>


            </Row>






            </div>
        );
    }
}

export default withRouter(Home);