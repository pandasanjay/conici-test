import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SmartCheckout from "./containers/SmartCheckout";
import Layout from "./containers/Layout";

import "./global.scss";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" component={SmartCheckout} />
        </Layout>
      </Router>
    );
  }
}

export default App;
