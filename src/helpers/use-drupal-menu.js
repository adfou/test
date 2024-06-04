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
        htmenu:
        allMenuLinkContentMenuLinkContent (filter: {menu_name: {eq: "ht-menu"}}) {
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
        ptmenu:
        allMenuLinkContentMenuLinkContent (filter: {menu_name: {eq: "pt-menu"}}) {
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
    if (lang =='ht'){
      return data.htmenu.edges;
    }
    else{
      if (lang =='pt-pt'){
        return data.ptmenu.edges;
      }
    return data.english.edges;
  }
  }
}

export { useDrupalMenu };
