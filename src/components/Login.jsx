import React, { Component } from "react";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import _ from "lodash";

import { loginUser, clearError } from "../actions";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onSubmitHandler = form => {
    this.props.loginUser(form);
  };

  componentDidUpdate() {
    if (!_.isEmpty(this.props.error)) {
      toast("Login gagal!", { containerId: "A" });
      this.props.clearError();
    }
  }

  render() {
    return (
      <div>
        <ToastContainer
          enableMultiContainer
          containerId={"A"}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            this.onSubmitHandler(this.state);
          }}
        >
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              placeholder="Alamat Surel"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              placeholder="Kata Sandi"
              onChange={this.onChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Masuk akun
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  {
    loginUser,
    clearError
  }
)(Login);
