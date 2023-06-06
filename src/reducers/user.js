import { abbreviate } from "../helpers";

const initialState = { 
  userid: "", 
  lang: "en",
  cancerType: "",
  site: "",
  notes: "",
  values: [],
  test: {
    doYouWantGeneticTest: null,
    notReadyToDecide: [],
    testTypes: null,
    notSureWhichTest: [],
    visibility: {
      yes: false,
      no: false,
      im: false
    }
  }
};

const user = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case `SET_USER`:
      return Object.assign({}, state, { ...action.userInfo });
    case `SET_LANG`:{
      stateCopy.lang = action.lang;
      return Object.assign({}, state, { ...stateCopy });}
    case `SET_NOTES`:
      stateCopy.notes = action.notes;
      return Object.assign({}, state, { ...stateCopy });
    case `SET_VALUE`:
      // Convert the "scale-<num>" string to just the <num> integer value
      let index = action.valueInfo.target.name.split("-").pop();
      index = Number(index);
      stateCopy.values[index] = {
        heading: action.heading,
        leftLabel: action.leftLabel,
        rightLabel: action.rightLabel,
        value: action.valueInfo.target.value
      }
      return Object.assign({}, state, { ...stateCopy });
    case `SET_TEST_INPUT`:
      const response = abbreviate(action.inputValue);
      if (action.inputType === "checkbox") {
        handleCheckbox(stateCopy, action.inputName, action.inputValue);
      }
      else {
        if (action.inputName === "doYouWantGeneticTest") {
          
          handleVisibility(stateCopy, response);
        }
        stateCopy.test[action.inputName] = action.inputValue;
      }
      applyTestLogic(stateCopy, response);
      return Object.assign({}, state, { ...stateCopy });
    default:
      return state;
  }
}

const handleCheckbox = (stateCopy, name, value) => {
  let set = new Set(stateCopy.test[name]);
  set.has(value) ? set.delete(value) : set.add(value);
  return stateCopy.test[name] = Array.from(set);
  /*
  */
}

const handleVisibility = (stateCopy, response) => {
  const currVisibilities = stateCopy.test.visibility;
  Object.keys(currVisibilities).forEach( (key) => {
    if (key === response) {
      stateCopy.test.visibility[key] = true;
    }
    else {
      stateCopy.test.visibility[key] = false;
    }
  });
}

const applyTestLogic = (stateCopy, response) => {
  const forceYes = "Yes, I want genetic testing";
  switch(response) {
    case "no":
    case "im":
      stateCopy.test.testTypes = null;
      stateCopy.test.notSureWhichTest = [];
    case "no":
    case "yes":
      stateCopy.test.notReadyToDecide = [];
      break;
    case "test":
      stateCopy.test.doYouWantGeneticTest = forceYes;
      stateCopy.test.notReadyToDecide = [];
      stateCopy.test.notSureWhichTest = [];
      break;
    case "think":
      stateCopy.test.testTypes = null;
      stateCopy.test.doYouWantGeneticTest = forceYes;
      stateCopy.test.notReadyToDecide = [];
      break;
    case "talk":
      if (stateCopy.test.notReadyToDecide.length > 0) {
        stateCopy.test.testTypes = null;
        stateCopy.test.notSureWhichTest = [];
      }
      if (stateCopy.test.notSureWhichTest.length > 0) {
        stateCopy.test.testTypes = null;
        stateCopy.test.doYouWantGeneticTest = forceYes;
        stateCopy.test.notReadyToDecide = [];
      }
      break;
    default:
      return;
  }
}
  

export default user;
