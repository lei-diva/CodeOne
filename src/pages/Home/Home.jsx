import React from 'react';
import {Container, Row, Col, Navbar, Nav, Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.styles.css'
import { SlideShow } from '../../components/slide-show/slide-show.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';
import Face from '../../images/face.jpeg';
import { auth} from '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom';
import {PlayButton} from '../../components/home-logo/home-logo.component';
import Scrollspy from 'react-scrollspy';
import Github from '../../images/github.png'
import LinkedIn from '../../images/linkedin.png'

class Home extends React.Component{
    constructor (props) {
        super(props);
        this.state={
            homedisplay:SignIn
        }
    }

    updateHomeDisplay = (dis) => {
        this.setState({homedisplay:dis});
    }

    render() {
        const HomeDisplay = this.state.homedisplay;

        return (
            <div className="home">


                <HomeNav className="home-nav"/> {/* NavBar for Home */}
                <div className="nav-link">
               <Scrollspy items={ ['home', 'features', 'about'] } currentClassName="is-current">

                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><Link to="/playground">Playground</Link></li>
                    {
                this.props.currentUser?
                    (
                        <li><Link to="/profile">Profile</Link></li>
                    )
                    :
                    (null)
                    }

                </Scrollspy>

            </div>
            <Container className="home-container">
            <section id="home"></section>

            <Row className="home-demo" md={6} lg={6}>
            <Col className="left" xs={8}>
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
                            {this.state.homedisplay === SignIn? /*change home buttons based on user status */
                            (
                                <button className="home-button" onClick={() => {this.updateHomeDisplay(SignUp)}}><span>Create an Account</span></button>
                            )
                            :
                            (
                                <button className="home-button" onClick={() => {this.updateHomeDisplay(SignIn)}}><span>Sign In</span></button>
                            )
                        }

                        <button className="guest-button" onClick={() => {this.props.history.push('playground')}} >Continue as Guest</button>
                        </div>
                    )
                    }


            </Col>
            <Col className="right" xs={4}>
            <HomeDisplay/> {/*Dynamically generate display */}
            </Col>

            </Row>

            <Row className="feature" id="features">{/* Feature section */}
            <SlideShow/>
         </Row>

         <Row className="about"> {/* About section */}

                <section id="about"></section>
                <Col className="about-left" sm={4}>
                <span className="about_title">About</span>

                <img className="face" src={Face}/>
                <div className="diva">Diva Lei</div>
        </Col>


                <Col className="about-right" sm={8}>

                    <p className="about-text"
                    > I created Code One to offer functionality to other web developers like myself. This
                        web application was intended to optimize and simplify front end development by providing
                        immediate visual feedback along with other useful tools. Code One was created over the course
                        of two weeks and is my first React JS project.
                        <a href="mailTo:divaaleii@gmail.com" className="contact-button">Contact Me</a>
                    </p>



                </Col>

            </Row>

            <Row className="footer">
                <div>
                    <span className="footer_open_tag">&#60; </span>
                    <span className="footer_slash big"> /</span>
                    <span className="footer_close_tag big">&#62;</span>
                </div>


                    <Scrollspy items={ ['home', 'features', 'about'] } currentClassName="is-current">
                    <span className="footer-title">Navigate</span>
                    <li classname="footer-link"><a href="#home">Home</a></li>
                    <li classname="footer-link"><a href="#features">Features</a></li>
                    <li><a classname="footer-link" href="#about">About</a></li>



                    </Scrollspy>
                    <ul>
                <span className="footer-title">Build</span>
                    <li><Link classname="footer-link" to="/playground">Playground</Link></li>
                    </ul>

                    <ul>
                <span className="footer-title">User</span>
                    <li><Link classname="footer-link" to="/login">Sign In</Link></li>
                    <li><Link classname="footer-link" to="/sign-up">Create an Account</Link></li>
                    </ul>
                    <a href="https://github.com/lei-diva/CodeOne"><img className="footer-icon" src={Github}/></a>

                <a href="https://www.linkedin.com/in/diva-lei-68b20b13b/"><img className="footer-icon" src={LinkedIn}/></a>


            </Row>


            </Container>


            </div>
        );
    }
}

export default withRouter(Home);