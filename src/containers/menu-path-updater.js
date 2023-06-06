import React from "react";
import { connect } from "react-redux";
import { setNewCurrent } from "../actions";

const mapStateToProps = (state) => {
  return {
    current: state.navigation.navPaths.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewCurrent: (path) => {
      return dispatch( setNewCurrent(path) );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
