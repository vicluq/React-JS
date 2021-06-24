import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "../Signup/Auth.css";

import Input from "../../Components/FormInput/FormInput";
import Spinner from "../../Components/UI/Spinner/Spinner";
import validateInput from "../../services/util/validation";
import { loginUser } from "../../services/redux-store/actions/auth";

class Login extends Component {
  state = {
    formData: {
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
    },
  };

  inputChangeHandler = (type, event) => {
    switch (type) {
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
          },
        }));
        break;
      default:
        return;
    }
  };

  loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.formData.email.value,
      password: this.state.formData.password.value,
    };

    this.props.logUser(user);
  };

  render() {
    const canProceed = Object.values(this.state.formData).reduce(
      (count, { isValid }) => {
        return count && isValid;
      }
    );

    let loginRedirect = null;
    if (this.props.success && !this.props.error) {
      if (this.props.orderInProgress) {
        loginRedirect = <Redirect from="/login" to="/checkout" />;
      } else {
        loginRedirect = <Redirect from="/login" to="/" />;
      }
    } else if (this.props.error && !this.props.success) {
      loginRedirect = <div className="Error-Signup">{this.props.error}</div>;
    }

    return (
      <Fragment>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div className="Login-Form Auth-Form">
            <form onSubmit={this.loginHandler}>
              <div className="Title">
                <h2>Login</h2>
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
                Login
              </button>
            </form>
          </div>
        )}
        {loginRedirect}
      </Fragment>
    );
  }
}

const mapPropsFromStore = (store) => {
  return {
    loading: store.authRed.loading,
    success: store.authRed.success.login,
    isAuth: store.authRed.auth,
    error: store.authRed.error.login,
    orderInProgress: store.orderInfoRed.orderInProgress,
  };
};

const mapActions = (dispatch) => {
  return {
    logUser: (user) => dispatch(loginUser(user, null, null)),
  };
};

export default connect(mapPropsFromStore, mapActions)(Login);
