import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { globalContentAction } from "../actions";
export class Layout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.unlisten = this.props.history.listen(this.handelRouterEnter);
    this.handelRouterEnter();
  }
  componentWillUnmount() {
    this.unlisten();
  }
  handelRouterEnter(location, action) {
    this.props.globalContentAction();
  }
  render() {
    const title =
      this.props.globalReducer.pageContents &&
      this.props.globalReducer.pageContents.global.title;
    const copyright =
      this.props.globalReducer.pageContents &&
      this.props.globalReducer.pageContents.global.copyright;
    return (
      <div>
        <Header title={title} />
        <div className="container">{this.props.children}</div>
        <Footer copyright={copyright} />
      </div>
    );
  }
}
/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  globalContentAction: () => dispatch(globalContentAction())
});

/*
 * mapStateToProps
 */
const mapStateToProps = state => ({
  ...state
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
