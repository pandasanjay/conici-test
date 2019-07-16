import React, { Component } from "react";
import { connect } from "react-redux";
import { billingAddressAction, selectAddressAction } from "../actions";
import "./SmartCheckout.scss";
import ComponentLoader from "../components/ComponentLoader";
import BillingAddress from "../components/BillingAddressSection";

export class SmartCheckout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getBillingAddress();
  }
  render() {
    const { heading, description, components } =
      (this.props.globalReducer.pageContents &&
        this.props.globalReducer.pageContents.content) ||
      {};

    const { back, submit } =
      (this.props.globalReducer.pageContents &&
        this.props.globalReducer.pageContents.global) ||
      {};

    const addressList = this.props.billingAddressReducer.address || [];

    return (
      <div>
        <h2 className="text-center pt-3">{heading}</h2>
        <p className="text-center">{description}</p>
        {addressList.map((data, i) => (
          <BillingAddress
            {...data}
            key={i}
            id={i}
            onSelect={this.props.selectAddress}
          />
        ))}
        <ComponentLoader name="add_new_address" data={components || {}} />
        <div className="sh-actions d-flex mt-5 justify-content-between pt-2 pb-2">
          <div className="pt-2 pb-2">
            <button
              type="button"
              className="btn btn-outline-primary pl-5 pr-5 text-uppercase"
            >
              {back}
            </button>
          </div>
          <div className="pt-2 pb-2">
            <button
              type="button"
              className="btn btn-primary pl-5 pr-5 text-uppercase"
            >
              {submit}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
/*
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch => ({
  getBillingAddress: () => dispatch(billingAddressAction()),
  selectAddress: id => dispatch(selectAddressAction(id))
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
)(SmartCheckout);
