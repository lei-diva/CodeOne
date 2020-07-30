import React, {useEffect} from 'react';
import {Container, Row, Col, Navbar, Nav, Carousel, Jumbotron} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Home.css'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';
import Face from '../../images/face.jpeg';
import { auth} from '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom';
import {PlayButton} from '../../components/home-logo/home-logo.component';
import Scrollspy from 'react-scrollspy';
import {HomeLogo} from '../../components/home-logo/home-logo.component';
import {Footer} from '../../components/footer/footer.component';
import Blue from '../../images/blue.jpg';
import projectnamevid from '../../images/projectname.mov';
import First1 from '../../images/second-slide.png';
import Next from '../../images/next.png';
import {useSelector} from 'react-redux';


export const Home = () => {



    const currentUser = useSelector(state=>state.currentUser);

    useEffect(() => {
        document.getElementById('myVideo').play();
      });






        let getStartedRoute = "/playground";

        if (currentUser && currentUser != "init") {
            getStartedRoute = "/profile";
        }






        return (
            <div className="home">
                    <HomeNav/>
            <div className="content">
            <section id="intro">
                <div className="intro-text">


                <h1 className="home_title"><HomeLogo/>CODE ONE</h1>
                <div class="clear"></div>

            <div className="subtitle">Develop with HTML, CSS, and Javascript in your own virutal playground!</div>
            <a className="get-started" href={getStartedRoute}><button className="home-button">GET STARTED</button></a>

            </div>
            <div>

            </div>

            </section>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="white" fill-opacity="1" d="M0,128L80,138.7C160,149,320,171,480,149.3C640,128,800,64,960,48C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            <div className="signin-home">
            <section id="features">

                <h1 className="home-subtitle">Features</h1>
            <Carousel >
                <Carousel.Item>
                            <video className="videos" autoplay muted loop id="myVideo" src={projectnamevid}></video>


            </Carousel.Item>

            <Carousel.Item>

            <video className="videos" autoplay muted loop id="myVideo" src={projectnamevid}></video>


            </Carousel.Item>

            <Carousel.Item>
            <video className="videos" autoplay muted loop id="myVideo" src={projectnamevid}></video>
            </Carousel.Item>
        </Carousel>

            </section>

                <section id="blog-section">

                <h1 className="blog-subtitle home-subtitle">Blog</h1>
                <br/>
                <br/>
               <div className="medium-blog">
                {/*}<blockquote className="embedly-card"><h4><a href="https://medium.com/@divaaleii/the-story-behind-code-one-c9dafd2efb69">The Story Behind Code One</a></h4><p>Code One is a project that helps front end developers better visualize and access their projects. I created Code One to offer functionality to other web developers like myself. This web application was intended to optimize and simplify front end development by providing immediate visual feedback along with other useful tools.</p></blockquote>
                {*/}
                <img className="blog-photo" src={Blue}/>
                <h2>The Production of Code One</h2>
                <p>Code One is a project that helps front end developers better visualize and access their projects. I created Code One to offer functionality to other web developers like myself.
                    This web application was intended to optimize and simplify front end development by providing immediate visual feedback along with other useful tools.
                     My main focus was to create a functional and easy-to-use web application. Code One was created over the course of two weeks and was created with React Js.
                </p>
                <p>Just a few weeks ago, I decided I wanted to steer my software engineering career towards the specialty of web development. I developed an interest and curiosity for ReactJs,
                    and the best way to learn it was the build with it. During my journey in becoming a developer, I was caught in many inefficient habits of development, the main one being the
                    constant refreshing of the browser. This problem further inspired the creation of Code One.</p>
                    <br/>
             {/*}
                <h3>Technologies</h3>
                <p>
                    Code one is hosted on Heroku. The entire application was created using the React Js library. Routing was implemented using React Router Dom and user authentication/storage was
                    done with FireBase.</p>
                <h3>Features</h3>
                <p>The main feature of Code One is the Playground. The playground allows the user to write HTML, CSS, and JS code as a live browser updates itself.
                Export — The user can change file names and export files onto their device. Save — If logged in, the user can save projects to their account and access it later
                </p>
            {*/}
                </div>



                </section>







            <section id="contact">
                    <h1 className="home-subtitle">Contact Me</h1>
                    <div className="contact-form">
                {/*}<blockquote className="embedly-card"><h4><a href="https://medium.com/@divaaleii/the-story-behind-code-one-c9dafd2efb69">The Story Behind Code One</a></h4><p>Code One is a project that helps front end developers better visualize and access their projects. I created Code One to offer functionality to other web developers like myself. This web application was intended to optimize and simplify front end development by providing immediate visual feedback along with other useful tools.</p></blockquote>
                {*/}
                    </div>

            </section>
            </div>
            </div>
            <Footer position="home-footer"/>
            </div>);

}

export default withRouter(Home);

 {/*<div className="home">


                <HomeNav className="home-nav"/> {/* NavBar for Home }
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

                </div>           </div>

 <Carousel interval={null} wrap={false} onSelect={this.handleSelect}activeIndex={1}>
 <Carousel.Item>
 <h2 className="next-text first">Dont have an account? Register</h2>
 <SignIn/>

 </Carousel.Item>

 <Carousel.Item>

 <h2 className="prev-text">Log In</h2>
 <h2 className="next-text second">Continue as guest</h2>
       <SignUp/>


 </Carousel.Item>

 <Carousel.Item>
 </Carousel.Item>
</Carousel>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="white" fill-opacity="0.9" d="M0,128L80,138.7C160,149,320,171,480,149.3C640,128,800,64,960,48C1120,32,1280,64,1360,80L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>


     <Col className="about-right" sm={8}>

                    <p className="about-text"
                    > I created Code One to offer functionality to other web developers like myself. This
                        web application was intended to optimize and simplify front end development by providing
                        immediate visual feedback along with other useful tools. Code One was created over the course
                        of two weeks and is my first React JS project.
                        <a href="mailTo:divaaleii@gmail.com" className="contact-button">Contact Me</a>
                    </p>



                </Col>


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
                            {this.state.homedisplay === SignIn? /*change home buttons based on user status
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
                <HomeDisplay/>
                </Col>

                </Row>

                <Row className="feature" id="features">
             </Row>

             <Row className="about">

                    <section id="about"></section>
                    <Col className="about-left" sm={4}>
                    <span className="about_title">About</span>

                    <img className="face" src={Face}/>
                    <div className="diva">Diva Lei</div>
            </Col>




                </Row>




                </Container>
            */}