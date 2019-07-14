import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SmartCheckout from "./containers/smart-checkout";
import Layout from "./components/Layout";
import "./global.scss";

class App extends Component {
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
