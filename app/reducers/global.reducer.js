import constants from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case constants.GLOBAL_CONTENT:
      return {
        pageContents: action.payload
      };
    default:
      return state;
  }
};
