import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import { Link } from "react-router-dom";

function Navbar({ user, logoutUser }) {
  let userLink = null;
  if (!_.isEmpty(user)) {
    userLink = (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="hola"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {user.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="hola">
            Setting
          </a>
          <div className="dropdown-divider" />
          <a
            className="dropdown-item"
            href="hola"
            onClick={e => {
              e.preventDefault();
              logoutUser();
            }}
          >
            logout
          </a>
        </div>
      </li>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Streamer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                AboutUs
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Stream
              </Link>
            </li>
            {userLink}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  {
    logoutUser
  }
)(Navbar);
