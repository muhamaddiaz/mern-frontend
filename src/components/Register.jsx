import React, { Component } from "react";
import { connect } from "react-redux";

import { registerUser } from "../actions";

class Register extends Component {
  state = {
    name: "",
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
    console.log("submitted");
    this.props.registerUser(form);
  };

  render() {
    return (
      <div>
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            this.onSubmitHandler(this.state);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nama Lengkap"
              value={this.state.name}
              name="name"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Alamat Surel"
              value={this.state.email}
              name="email"
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Kata Sandi"
              value={this.state.password}
              name="password"
              onChange={this.onChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Daftar sekarang
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);
