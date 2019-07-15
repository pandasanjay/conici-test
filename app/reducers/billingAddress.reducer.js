import constants from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case constants.BILLING_ADRESS:
      return {
        address: action.payload.data
      };
    default:
      return state;
  }
};
