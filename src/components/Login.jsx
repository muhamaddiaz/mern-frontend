import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form action="">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Alamat Surel"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Kata Sandi"
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

export default Login;
