import React from "react";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { ucFirst } from "../helpers";

const LanguageSwitcher = ({ englishPath, spanishPath }) => {
  const languages = {
    english: englishPath,
    Español: spanishPath
  }
  console.log("---------language-----------")
  console.log(languages)
  return (
    <div className="language-switcher d-flex justify-content-end">
      { Object.keys(languages).map( (lang) => {
        return (
          <Button
            as={ Link }
            id={`lang-${lang}`}
            value={ lang }
            to={ languages[lang] }
          >
            { ucFirst(lang) }
          </Button>
        );
        {/*
          <ToggleButton
            as={ Link }
            id={`lang-${lang}`}
            value={ lang }
            to={ languages[lang] }
          >
            { ucFirst(lang) }
          </ToggleButton>
        */}
      })}
    </div>
  );
}

export default LanguageSwitcher;
