import { createReducer } from "../../app/common/util/ReducerUtils";
import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";

const initialState = {
  authenticated: false,
  currentUser: null
};

const loginUse = (state, payload) => {
  return {
    authenticated: true,
    currentUser: payload.creds.email
  };
};

const signOutUser = () => {
  return {
    authenticated: false,
    currentUser: null
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUse,
  [SIGN_OUT_USER]: signOutUser
});
