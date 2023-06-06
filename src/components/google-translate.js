import React, { useEffect } from "react";

// InlineLayout.SIMPLE
// InlineLayout.VERTICAL
// InlineLayout.HORIZONTAL

const GoogleTranslate = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
      pageLanguage: 'en', 
      layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      autoDisplay: false, 
      includedLanguages: 'ar,zh-CN,zh-TW,en,fr,de,el,ht,hi,it,ja,ko,pt,ru,es,vi'
    }, 'google_translate_element');
  }

    useEffect(() => {
      var addScript = document.createElement('script');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

  return (
    <div className="gtranslate-container d-flex justify-content-center">
      <div id="google_translate_element"></div>
    </div>
  );
}

export default GoogleTranslate;
