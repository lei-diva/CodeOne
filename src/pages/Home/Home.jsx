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
import AppIcon from '../../images/app.png';


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
            <a className="get-started" href={getStartedRoute}><button className="home-button get-started">GET STARTED</button></a>

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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Phasellus egestas tellus rutrum tellus pellentesque eu. Sed felis eget velit aliquet sagittis id. Neque viverra justo nec ultrices dui sapien eget mi. Enim sit amet venenatis urna cursus. Phasellus vestibulum lorem sed risus ultricies tristique. Aliquet nec ullamcorper sit amet risus nullam eget felis. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Sagittis aliquam malesuada bibendum arcu. Nulla at volutpat diam ut venenatis tellus in metus. Amet tellus cras adipiscing enim. Erat imperdiet sed euismod nisi porta. Elit ullamcorper dignissim cras tincidunt lobortis. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Maecenas ultricies mi eget mauris. Neque viverra justo nec ultrices.

Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Enim nulla aliquet porttitor lacus. Euismod lacinia at quis risus sed. Risus ultricies tristique nulla aliquet enim tortor. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Vel turpis nunc eget lorem dolor sed viverra ipsum. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Amet cursus sit amet dictum sit amet justo donec enim. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Morbi tristique senectus et netus et malesuada fames ac. Tortor condimentum lacinia quis vel. Nec feugiat in fermentum posuere. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Tempor nec feugiat nisl pretium fusce id.</p>
               <p>Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Quam viverra orci sagittis eu volutpat. Congue mauris rhoncus aenean vel elit scelerisque mauris. Aliquam faucibus purus in massa tempor. Neque sodales ut etiam sit amet. Lacus sed viverra tellus in hac habitasse platea. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Est lorem ipsum dolor sit amet consectetur. In aliquam sem fringilla ut morbi tincidunt. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Scelerisque in dictum non consectetur a erat nam at. Dignissim enim sit amet venenatis urna cursus eget. Est ante in nibh mauris cursus. Consectetur purus ut faucibus pulvinar elementum integer. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Cursus in hac habitasse platea dictumst quisque sagittis. Consequat nisl vel pretium lectus quam id. A pellentesque sit amet porttitor eget dolor morbi non. Quis lectus nulla at volutpat.</p>      <br/>

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