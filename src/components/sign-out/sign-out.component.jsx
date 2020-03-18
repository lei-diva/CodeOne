import React from 'react';
import { Button } from 'react-bootstrap';
import './sign-out.styles.css';
import { auth} from '../../firebase/firebase.utils';
import {SignInPage} from '../../pages/SignIn/SignIn';
import { withRouter } from "react-router-dom";

const SignOut = (props) =>
    (
        <div>
        {
        props.currentUser?
        (<div className="sign-in-nav">
        <Button
            className="sign-out-button"
            onClick={()=>{
                auth.signOut();
                props.history.push('/');
            }}
            >
            SIGN OUT
        </Button>
        </div>)
        :
        (<div className="sign-in-nav">
        <Button className="sign-in-up-button" onClick={()=> props.history.push('/sign-up')}>Sign Up </Button>
        <Button className="sign-in-up-button" onClick={()=> props.history.push('/login')}>Sign In </Button>

        </div>
        )
        }
        </div>
    )

export default withRouter(SignOut);