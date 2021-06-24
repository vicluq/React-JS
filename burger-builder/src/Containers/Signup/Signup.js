import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./Auth.css";

import Input from "../../Components/FormInput/FormInput";
import Spinner from "../../Components/UI/Spinner/Spinner";
import validateInput from "../../services/util/validation";
import { authSignup } from "../../services/redux-store/actions/auth";

class Signup extends Component {
  state = {
    formData: {
      name: {
        value: "",
        inputType: "text",
        isValid: false,
        pholder: "name...",
      },
      email: {
        value: "",
        inputType: "email",
        isValid: false,
        pholder: "email...",
      },
      password: {
        value: "",
        inputType: "password",
        isValid: false,
        pholder: "password...",
      },
      confirmPassword: {
        value: "",
        inputType: "password",
        isValid: false,
        pholder: "confirm password...",
      },
    },
  };

  inputChangeHandler = (type, event) => {
    switch (type) {
      case "name":
        const name = event.target.value;
        this.setState((old) => ({
          ...old,
          formData: {
            ...old.formData,
            name: { value: name, isValid: validateInput(name, { minLen: 2 }) },
          },
        }));
        break;
      case "email":
        const email = event.target.value;
        this.setState((old) => ({
          ...old,
          formData: {
            ...old.formData,
            email: {
              value: email,
              isValid: validateInput(email, { email: true }),
            },
          },
        }));
        break;
      case "password":
        const pass = event.target.value;
        this.setState((old) => ({
          ...old,
          formData: {
            ...old.formData,
            password: {
              value: pass,
              isValid: validateInput(pass, { minLen: 6 }),
            },
            confirmPassword: {
              ...old.formData.confirmPassword,
              isValid: validateInput(
                {
                  mainValue: pass,
                  conValue: old.formData.confirmPassword.value,
                },
                { confirmation: true }
              ),
            },
          },
        }));
        break;
      case "confirmPassword":
        const conPass = event.target.value;

        this.setState((old) => ({
          ...old,
          formData: {
            ...old.formData,
            confirmPassword: {
              value: conPass,
              isValid: validateInput(
                {
                  mainValue: this.state.formData.password.value,
                  conValue: conPass,
                },
                { confirmation: true }
              ),
            },
          },
        }));
        break;
      default:
        return;
    }
  };

  registerHandler = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.formData.name.value,
      email: this.state.formData.email.value,
      password: this.state.formData.password.value,
    };

    this.props.signup(newUser);
  };

  render() {
    const canProceed = Object.values(this.state.formData).reduce(
      (count, { isValid }) => {
        return count && isValid;
      },
      true
    );
    return (
      <Fragment>
        {this.props.success && !this.props.error ? (
          <Redirect from="/Signup" to="/Login" />
        ) : (
          <div className="Error-Signup">{this.props.error}</div>
        )}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div className="Signup-Form Auth-Form">
            <form onSubmit={this.registerHandler}>
              <div className="Title">
                <h2>Register</h2>
              </div>
              {Object.entries(this.state.formData).map((input) => (
                <Input
                  key={input[0]}
                  req={true}
                  type={input[1].inputType}
                  name={input[0]}
                  pholder={input[1].pholder}
                  value={input[1].value}
                  valid={input[1].isValid}
                  onchange={this.inputChangeHandler.bind(this, input[0])}
                />
              ))}
              <button disabled={!canProceed} type="submit">
                Sign Up
              </button>
            </form>
            <div className="Login-Message">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapPropsFromStore = (store) => {
  return {
    loading: store.authRed.loading,
    success: store.authRed.success.signup,
    isAuth: store.authRed.auth,
    error: store.authRed.error.signup,
  };
};

const mapActions = (dispatch) => {
  return {
    signup: (data) => dispatch(authSignup(data)),
  };
};

export default connect(mapPropsFromStore, mapActions)(Signup);
