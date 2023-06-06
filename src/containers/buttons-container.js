import React from "react";
import { connect } from "react-redux";
import { advance, retreat, setNewCurrent } from "../actions";
import PrevNextButtons from "../components/prev-next-buttons";

const mapStateToProps = (state, isOrphan , lang) => {

  return { 
    prevNext: state.navigation.navPaths
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    advance: () => { 
      dispatch( advance() );
    },
    retreat: () => {
      dispatch( retreat() );
    },
    setNewCurrent: (path) => {
      return dispatch( setNewCurrent(path) );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrevNextButtons);
