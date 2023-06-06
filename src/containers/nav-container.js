import { connect } from "react-redux";
import NavMenu from "../components/nav-menu";

const mapStateToProps = (state) => {
  return { 
    menuItems: state.navigation.menuItems,
    isAdminLoggedIn: state.admin.isLoggedIn
  };
}

export default connect(mapStateToProps, null)(NavMenu);
