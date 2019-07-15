import billingReducer from "./global.reducer";
import constants from "../constants";
describe("Billing Address reducer", () => {
  it("should return inital state", () => {
    expect(billingReducer(undefined, {})).toEqual({});
  });
  it("should handel BILLING_ADRESS", () => {
    expect(
      billingReducer(undefined, {
        type: constants.GLOBAL_CONTENT,
        payload: {}
      })
    ).toEqual({ pageContents: {} });
  });
});
