import React from 'react';
import './sign-in.styles.css';
import {FormInput} from '../form-input/form-input.component';
import EmailIcon from '../../images/mail.png';
import PwdIcon from '../../images/password.png';
import {Logo} from '../../components/logo/logo.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }


    }

    handleChange= event => {
        const { value, name } = event.target;
        console.log(this.state.email, this.state.password);
        this.setState({ [name] : value })
    }

    render() {
        return(



            <div className="sign-in log-in  ">

                <div className="sign-in-title">Sign in to your account</div>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="Email"
                    img_label={EmailIcon}
                    required/>

                    <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="Password"
                    img_label={PwdIcon}
                    required/>

                </form>
                <button className="home-button sign-in-button" onClick={this.handleSubmit}>Continue</button>

                {/*}
                <button className="home-button sign-in-button google" type="button" onClick={signInWithGoogle}>
                    Log in with Google
        </button>{*/}
                <p className="log-in-option">Dont have an account? <span className="here" onClick={()=> {this.props.hideLogIn();this.props.showSignUp()}}>Register here.</span></p>
            </div>

        )
    }

}

export default withRouter(SignIn);