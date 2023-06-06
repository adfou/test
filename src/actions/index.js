const setUser = (userInfo) => {
  return {
    type: `SET_USER`,
    userInfo
  }
}

const setNotes = (notes) => {
  return {
    type: `SET_NOTES`,
    notes
  }
}

const setValue = (e, heading, leftLabel, rightLabel) => {
  return {
    type: `SET_VALUE`,
    valueInfo: e,
    heading,
    leftLabel,
    rightLabel
  }
}

const setTestInput = (inputName, inputValue, inputType) => {
 
  return {
    type: `SET_TEST_INPUT`,
    inputName,
    inputValue,
    inputType
  }
}

const initializeMenu = (drupalMenu) => {
  return {
    type: `INITIALIZE`,
    drupalMenu
  }
}

const setNewCurrent = (path) => { 
  return {
    type: `SET_NEW_CURRENT`,
    path
  }
}

const triggerModal = () => {
  return {
    type: `TRIGGER_MODAL`,
  }
}

const advance = () => {
  return {
    type: `ADVANCE`,
  }
}

const retreat = () => {
  return {
    type: `RETREAT`,
  }
}

const isCurrent = (item) => {
  return {
    type: `IS_CURRENT`,
    item
  }
}

const adminLogin = (submitted) => {
  return {
    type: `ADMIN_LOGIN`,
    submitted
  }
}

const logout = () => {
  return {
    type: `LOGOUT`
  }
}

const setLang = () => {
  return {
    type: `SET_LANG`
  }
}

const setLang_v1 = (lang) => {
  return {
    type: `SET_LANG`,
    lang
  }
}
export { 
  setUser, 
  setNotes,
  setValue, 
  setLang, 
  setTestInput, 
  initializeMenu, 
  advance, 
  retreat, 
  setNewCurrent, 
  triggerModal,
  adminLogin,
  logout,
  setLang_v1
};
