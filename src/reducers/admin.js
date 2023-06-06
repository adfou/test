const initialState = { 
  isLoggedIn: false,
  showError: false
}

const PASSWORD = "da@dmin";

const admin = (state = initialState, action) => {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case `ADMIN_LOGIN`:
      if (action.submitted === PASSWORD) {
        stateCopy.isLoggedIn = true;
        stateCopy.showError = false;
      }
      else {
        stateCopy.showError = true;
      }
      return Object.assign({}, state, stateCopy);
    default:
      return state;
  }
}

export default admin;
