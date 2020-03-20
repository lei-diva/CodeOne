import React from 'react';
import './sign-in.styles.css';
import {FormInput} from '../form-input/form-input.component';
import EmailIcon from '../../mail.png';
import PwdIcon from '../../password.png';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {withRouter} from 'react-router-dom';

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
            this.setState({email: '', password: ''}, ()=> this.props.history.push('/'));
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
            <div className="sign-in">
                <span className="sign-in-title">Sign in with your email</span>

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
                <button className="home-button sign-in-button" onClick={this.handleSubmit}>Submit</button>
                {/* Bug with Google Auth popup window}

                <button className="home-button sign-in-button" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
        {*/}
            </div>
        )
    }

}

export default withRouter(SignIn);