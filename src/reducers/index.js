import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import user from "./user";
import navigation from "./navigation";
import admin from "./admin";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  user,
  admin,
  navigation,
  form: formReducer
});

const rootReducer = (state, action) => {
  if (action.type === `LOGOUT`) {
    storage.removeItem("persist:root");
    state = undefined;
  }
  return allReducers(state, action);
}

export default rootReducer;
