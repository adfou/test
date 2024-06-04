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
  if(str === "Konpran jèn ak tès jenetik"){
    return "Jèn ak fè tès"
  }
  if(str ==="genes e os testes genéticos"){
    return "Genes e testes"
  }
  return str[0].toUpperCase() + str.slice(1);
}
const ucFirstMult = (str,lang) => {

  if(str ==="Finalizar"){
     switch(lang){
      case "es":
        return "Finalizar";
      case "ht":
        return "Fini";
      case "pt-pt":
        return "Terminar";
     }
  }
  switch (lang) {
    case 'es':
      if (str =="next"){
        str = "próximo"
      }
      if (str =="previous"){
        str = "Anterior"
      }
    case 'ht':
      if (str =="next"){
        str = "Pwochen"
      }
      if (str =="previous"){
        str = "Avan"
      }
      break;
      case 'pt-pt':
        if (str =="next"){
          str = "Seguinte"
        }
        if (str =="previous"){
          str = "Anterior"
        }
        break;
  }
  
  return str[0].toUpperCase() + str.slice(1);
}
const getContent = (obj, field1, field2 = false) => {
  return _hasContent(obj, field1, field2) && obj[field1];
}

const abbreviate = (test) => {
  if(test ==="Não estou preparado para decidir"){return 'im'}
  let tes_t= test.substring(0, 3)
  if(tes_t[0] === 'S' || tes_t === "Wi,"){ return 'yes'}
  if(tes_t === 'No,' || tes_t ==="Non"){return 'no'}
  if(tes_t === 'No ' || tes_t === "Mwe" ){return 'im'}
  if(tes_t === 'Pru' || tes_t ==="Tès"){
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
  ucFirstMult,
  abbreviate, 
  getContent, 
  toCamelCase 
};
