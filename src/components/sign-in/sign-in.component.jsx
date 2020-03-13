import React from 'react';
import './sign-in.styles.css';
import {FormInput} from '../form-input/form-input.component';
import EmailIcon from '../../mail.png';
import PwdIcon from '../../password.png';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
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

                    <img className="email-icon" src={EmailIcon}/>
                    <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="Email"
                    required/>
                    <img className="pwd-icon" src={PwdIcon}/>
                    <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="Password"
                    required/>


                </form>
                <button className="home-button sign-in-button">Submit</button>
            </div>
        )
    }

}

export default SignIn;