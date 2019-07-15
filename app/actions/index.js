import _ from "lodash";
import api from "../config/api";
import constants from "../constants";
export const globalContentAction = () => dispatch => {
  return api
    .get(
      "https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json"
    )
    .then(res => {
      if (res.status == 200 && !_.has(res.data, "error")) {
        dispatch({
          type: constants.GLOBAL_CONTENT,
          payload: res.data
        });
      }
    });
};

export const billingAddressAction = () => dispatch => {
  return api
    .get(
      "https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json"
    )
    .then(res => {
      if (res.status == 200 && !_.has(res.data, "error")) {
        dispatch({
          type: constants.BILLING_ADRESS,
          payload: res.data
        });
      }
    });
};
