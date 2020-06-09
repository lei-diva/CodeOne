import React, { useState } from 'react';
import { Nav, Modal } from 'react-bootstrap';
import './sign-out.styles.css';
import { auth} from '../../firebase/firebase.utils';
import {SignInPage} from '../../pages/SignIn/SignIn';
import { withRouter } from "react-router-dom";
import {useSelector} from 'react-redux';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

const SignOut = (props) =>{

    const [logIn, setLogIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    const closeLogIn = () => setLogIn(false);
    const openLogIn = () => setLogIn(true);

    const closeSignUp = () => setSignUp(false);
    const openSignUp = () => setSignUp(true);

     const currentUser = useSelector(state=>state.currentUser);

    return (
        <div>

        {
        currentUser?
        (

        <Nav.Link

            className={`sign-out-button ${props.className}`}
            onClick={()=>{
                auth.signOut();
                props.history.push('/');
            }}
            >
            Sign Out</Nav.Link>

        )
        :
        (
            <Nav className="sign-in-up-buttons">
                <Nav.Link className="nav sign-in-button" onClick={openLogIn}>Sign In </Nav.Link>
                    <Modal dialogClassName="sign-in-modal" show={logIn} onHide={closeLogIn} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <SignIn showSignUp={openSignUp} hideLogIn={closeLogIn}/>
                    </Modal>
                <Nav.Link className="nav sign-up-button" onClick={openSignUp}>Register </Nav.Link>
                    <Modal dialogClassName="sign-up-modal" show={signUp} onHide={closeSignUp} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <SignUp hideSignUp={closeSignUp} showLogIn={openLogIn}/>
                    </Modal>
            </Nav>
        )
        }
        </div>
    )
}

export default withRouter(SignOut);