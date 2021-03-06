import React from "react";
import { FormInput } from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.css";
import EmailIcon from "../../images/mail.png";
import PwdIcon from "../../images/password.png";
import UserIcon from "../../images/user.png";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    /* User authentication with sign up */
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState(
        {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        },
        () => this.props.history.push("/profile")
      );
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-in sign-up">
        <div className="sign-up-title">Register</div>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            img_label={UserIcon}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            img_label={EmailIcon}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            img_label={PwdIcon}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            img_label={PwdIcon}
            required
          />
          <button className="home-button sign-in-button" type="submit">
            Continue
          </button>
        </form>
        <p className="log-in-option">
          Already have an account?{" "}
          <span
            className="here"
            onClick={() => {
              this.props.hideSignUp();
              this.props.showLogIn();
            }}
          >
            Log in.
          </span>
        </p>
      </div>
    );
  }
}

export default withRouter(SignUp);
