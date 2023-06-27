import React from "react";

const setHTML = (data) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}

const getNodeId = (str) => {
  return str.split("/").pop();
}

const urlify = (name) => {
  const toArr = name.split(" ").map( (segment) => {
    return segment.toLowerCase().replace(/\W/g, "");
  });
  return toArr.join("-");
}

const toCamelCase = (str) => {
  const camelCased = str.split("-").map( (frag, i) => {
    return i === 0 ? frag : ucFirst(frag);
  });
  return camelCased.join("");
}

const exists = (content) => {
  return content != null && typeof content !== "undefined";
}

const ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}
const ucFirst_es = (str) => {
  if (str =="next"){
    str = "próximo"
  }
  if (str =="previous"){
    str = "Anterior"
  }
  return str[0].toUpperCase() + str.slice(1);
}
const getContent = (obj, field1, field2 = false) => {
  return _hasContent(obj, field1, field2) && obj[field1];
}

const abbreviate = (test) => {
  
  let tes_t= test.substring(0, 3)
  if(tes_t[0] == 'S'){ return 'yes'}
  if(tes_t == 'No,'){return 'no'}
  if(tes_t == 'No '){return 'im'}
  if(tes_t === 'Pru'){
    return 'test'}
  
  return test.split(" ")[0].toLowerCase().replace(/\W/g, "");
}

const _hasContent = (obj, field1, field2 = false) => {
  const hasField1 = obj.hasOwnProperty(field1) && obj[field1] != null;
  if (!field2) {
    return hasField1;
  }
  return hasField1 && _hasValidField2(obj, field1, field2);
}

const _hasValidField2 = (obj, field1, field2) => {
  const component = obj[field1];
  if (Array.isArray(component) && component.length > 0) {
    return component[0].hasOwnProperty(field2) && component[0][field2];
  }
  else if (component.hasOwnProperty(field2)) {
    return Array.isArray(component[field2]) && component[field2][0];
  }
  else {
    return false;
  }
}


export { 
  setHTML, 
  getNodeId, 
  urlify, 
  exists, 
  ucFirst, 
  ucFirst_es,
  abbreviate, 
  getContent, 
  toCamelCase 
};
