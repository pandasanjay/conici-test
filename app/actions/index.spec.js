import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import sinon from "sinon";
import * as actions from "./index";
import types from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("check actions", () => {
  it("check GLOBAL_CONTENT", () => {
    const expectedActions = [
      {
        type: types.GLOBAL_CONTENT,

        payload: {
          content: {
            heading: "Select Billing Address",
            description:
              "Select your billing address for the extras chosen previously, as well as potential extras added to your account by the hotel. The corporate billing address for the room night was already passed to the hotel.",
            components: {
              add_new_address: {
                heading: "Add New",
                description: "Billing Address"
              }
            }
          },
          global: {
            title: "Smart Check-out",
            back: "Back",
            submit: "Submit",
            copyright: "© 2018 - Hotel Beacons GmbH"
          }
        }
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.globalContentAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("check BILLING_ADRESS", () => {
    const expectedActions = [
      {
        type: types.BILLING_ADRESS,

        payload: {
          data: [
            {
              type: "ADDRESS",
              label: "Deloitte",
              address: {
                street: "Stralauer Allee 22",
                postal_code: "10245",
                separator: "-",
                city: "Berlin",
                country: "Germany"
              }
            },
            {
              type: "ADDRESS",
              label: "Deloitte",
              address: {
                street: "Ohlauer Strasse 223",
                postal_code: "10999",
                separator: "-",
                city: "Berlin",
                country: "Germany"
              }
            }
          ]
        }
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(actions.billingAddressAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
