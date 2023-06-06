import NavManager from "../helpers/nav-manager";

const navMan = new NavManager();

const initialState = {
  navPaths: {
    current: false,
    previous: false,
    next: false
  },
  menuItems: [],
  showModal: false
}


const navigation = (state = initialState, action) => {
  let newNavPaths;
  switch(action.type) {
    case `INITIALIZE`:
      navMan.initialize(action.drupalMenu);
      return Object.assign(
        {}, state, { 
          menuItems: navMan.getMenuItems(),
          navPaths: navMan.getNavPaths()
        } 
      );
    case `ADVANCE`:
      newNavPaths = navMan.advance().getNavPaths();
      return Object.assign(
        {}, state, 
        { navPaths: newNavPaths }
      );
    case `RETREAT`:
      newNavPaths = navMan.retreat().getNavPaths();
      return Object.assign(
        {}, state, 
        { navPaths: newNavPaths }
      );
    case `SET_NEW_CURRENT`:
      if (!action.path) { return state; }
      if (navMan.getMenuItems().length === 0) {
        navMan.setMenuItems(state.menuItems);
      }
      navMan.setNewCurrent(action.path);
      newNavPaths = navMan.getNavPaths();
      return Object.assign(
        {}, state, 
        { navPaths: newNavPaths }
      );
    case `TRIGGER_MODAL`:
      return Object.assign(
        {}, state, { showModal: !state.showModal }
      );
    case `LOGOUT`:
      navMan.reset();
      return initialState;
    default:
      return state;
  }
}

export default navigation;
