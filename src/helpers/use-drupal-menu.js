import { useStaticQuery, graphql } from "gatsby";

const useDrupalMenu = (lang) => {
 
  const data  = useStaticQuery(
    graphql`
      query {
        english:
        allMenuLinkContentMenuLinkContent (filter: {menu_name: {eq: "main"}}) {
          edges {
              node {
                title
                weight
                link {
                  uri
                }
            }
          }
        }
        spanish:
        allMenuLinkContentMenuLinkContent (filter: {menu_name: {eq: "spanish-menu"}}) {
          edges {
              node {
                title
                weight
                link {
                  uri
                }
            }
          }
        }
      }
    `
  );
  if (lang =='es'){
  return data.spanish.edges;}
  else{
    return data.english.edges;
  }
}

export { useDrupalMenu };
