import constants from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case constants.BILLING_ADRESS:
      return {
        address: action.payload.data
      };
    case constants.SELECT_BILLING_ADRESS:
      return Object.assign({}, state, {
        address: state.address.map((data, i) => {
          if (i === action.payload) {
            data.selected = true;
          } else {
            data.selected = false;
          }
          return data;
        })
      });
    default:
      return state;
  }
};
