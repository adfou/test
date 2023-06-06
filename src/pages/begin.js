import React from "react";
import { connect } from "react-redux";
import { initializeMenu, } from "../actions";
import { graphql } from "gatsby";
import NavButton from "../components/nav-button";
import LargeHeader from "../components/large-header";
import LanguageSwitcher from "../components/language-switcher";
import Footer from "../components/footer";
import ContentContainer from "../components/content-container";
import { setLang,setLang_v1 } from "../actions";
import { useDrupalMenu } from "../helpers/use-drupal-menu";
import { setHTML } from "../helpers";

const mapDispatchToProps = (dispatch) => {
  return {
    initializeMenu: (drupalMenu ) => {
      dispatch( initializeMenu(drupalMenu) );
    },
    setLang: (lang) => {
      dispatch( setLang_v1(lang) );
    }
  }
}

const Begin = ({ data, initializeMenu,setLang }) => {
  const drupalMenu = useDrupalMenu("en");
  setLang('en')
  const fields = data.english;
  return (
    <div onLoad={ initializeMenu(drupalMenu) }>
      <LargeHeader />
      <ContentContainer>
        <LanguageSwitcher
         englishPath={ data.english.path.alias }
         spanishPath={ '/es-begin' }
        />
        <div className="begin-end-content">
          { setHTML(fields.body.processed) }
        </div>
        
      </ContentContainer>
      <div className="prev-next-buttons  text-center begin-button-margin">
        <NavButton path="/how-to-use">Start</NavButton>
      </div>
      <Footer className="fixed-bottom" />
    </div>
  );
}

export const query = graphql`
  query BeginQuery {
    english: 
      nodeArticle(
        drupal_internal__nid: {eq: 20} 
        langcode: {eq: "en"}
      ) {
        title
        body {
          processed
        }
        path {
          alias
        }
      }
    spanish: 
      nodeArticle(
        drupal_internal__nid: {eq: 20} 
        langcode: {eq: "es"}
      ) {
        title
        body {
          processed
        }
        path {
          alias
        }
      }
  }
`
export default connect(null, mapDispatchToProps)(Begin);
