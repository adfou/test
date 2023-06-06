/**
 * Login page
 *
 * This is the preliminary page to the genetic testing decision aid in which a study admin
 * or medical assistant enters a patient id, selects the appropriate cancer type, and
 * selects the hospital (site). A patient may not use the da until s/he is logged in.
 *
 * This component uses Redux Form to capture user input and Redux to manage state.
 */
import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginForm from "../components/login-form";
import { setUser } from "../actions";
import { navigate, graphql } from "gatsby";

const mapStateToProps = (state) => {
  return { user: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (values) => {
      console.log("Is this thing working?");
      if (Object.entries(values).length == 3) {
        console.log(values);
        //dispatch( setUser(values) );
        //navigate("/welcome");
      }
    }
  }
}

let Login = ({ data, setUser }) => {
  const cancers = data.allTaxonomyTermCancerType.edges;
  const sites = data.allTaxonomyTermSites.edges;
  return (
    <LoginForm
      cancers={ cancers }
      sites={ sites }
      onSubmit={ setUser }
    />
  );
}

// GraphQL querty to grab all cancer types and sites from DB, pass to component
export const query = graphql`
  query {
    allTaxonomyTermCancerType {
      edges {
        node {
          name
        }
      }
    }
    allTaxonomyTermSites {
      edges {
        node {
          name
        }
      }
    }
  }
`

// Use redux's connect method to map Login's form values to the action dispatcher using
// mapDispatchToProps
Login =  connect(mapStateToProps, mapDispatchToProps)(Login);

// Export the connected component, decorating it with reduxForm to connect the redux form
// to redux
export default reduxForm({ form: "login_page" })(Login);
