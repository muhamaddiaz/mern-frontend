import React, { Component } from "react";
import { Route } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h3>Hello to my app</h3>
        </div>
        <section>
          <Route
            path="/"
            exact
            render={props => {
              console.log(props.match);
              return (
                <div>
                  <h1>Home page</h1>
                </div>
              );
            }}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={AboutUs} />
        </section>
      </div>
    );
  }
}

function Contact(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello Contact</h1>
    </div>
  );
}

function AboutUs(props) {
  return (
    <div>
      <h1>Hello About Us</h1>
    </div>
  );
}

export default MainPage;
