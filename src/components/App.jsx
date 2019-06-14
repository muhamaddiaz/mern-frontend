import React, { Component, Fragment } from "react";
import { registerUser } from "../actions";
import _ from "lodash";
import { toast } from "react-toastify";

import { connect } from "react-redux";
import AuthForm from "./AuthForm";
import MainPage from "./MainPage";
import Navbar from "./Navbar";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

class App extends Component {
  renderApp() {
    if (_.isEmpty(this.props.user)) {
      return <AuthForm />;
    }

    return <MainPage />;
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container mt-5">{this.renderApp()}</div>
      </Fragment>
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
  { registerUser }
)(App);
