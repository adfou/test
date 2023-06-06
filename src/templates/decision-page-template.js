import React from "react";
import { connect } from "react-redux";
import { graphql } from "gatsby";
import Header from "../components/header";
//import GoogleTranslate from "../components/google-translate";
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PageBody from "../components/page-body";
import NavContainer from "../containers/nav-container";
import NotesArea from "../components/notes-area";
import ButtonsContainer from "../containers/buttons-container";
import Footer from "../components/footer";


const mapStateToProps = (state) => {
  return {
    cancerType: state.user.cancerType.toLowerCase()
  }
}

const DecisionPageTemplate = ({ data, cancerType }) => {
  const node = data.nodeDecisionAidPage;
  console.log(node)
  return (
    <Layout className={ `decision-page ${ cancerType }` }>
      <Header />
      <NavContainer />

      <PageTitle>
        { node.title }
      </PageTitle>

      <PageBody
        page={ node.path.alias }
        video={ node.relationships }
        videoCaption={ node.field_video_caption }
        intro={ node.field_intro_text }
        complexContent={ node.relationships }
        outro={ node.field_outro_text }
      />
      <NotesArea lang = {node.langcode}/>
      <ButtonsContainer isOrphan={ node.field_is_orphan_page } lang={ node.langcode } />
      <Footer />
    </Layout>
  );
}


export const query = graphql`
  query(
    $drupal_internal__nid: Int!,
    $langcode: String!
  ) {
    nodeDecisionAidPage(
      drupal_internal__nid: {eq: $drupal_internal__nid},
      langcode: {eq: $langcode} 
    ) {
      langcode
      title
      field_is_orphan_page
      field_video_caption
      field_intro_text {
        processed
      }
      path {
        alias
      }
      field_outro_text {
        processed
      }
      relationships {
        field_accordions {
          field_accordion_heading
          field_accordion_subheading
          field_accordion_body {
            processed
          }
          relationships {
            field_cancer_type {
              name
            }
          }
        }
        field_content_module {
          field_module_title
          field_should_be_hidden
          relationships {
            field_cancer_type {
              name
            }
            field_it_s_your_choice_label {
              name
            }
            field_content_segment {
              field_content {
                processed
              }
              relationships {
                field_button_with_text {
                  field_button_text
                  field_text_leading_to_button {
                    processed
                  }
                  relationships {
                    field_button_destination {
                      ... on node__article {
                        path {
                          alias
                        }
                      }
                      ... on node__decision_aid_page {
                        path {
                          alias
                        }
                      }
                    }
                  }
                }
                field_multiple_choice {
                  field_option_name
                  field_intro_to_options
                  field_can_choose_multiple
                  relationships {
                    field_relevance {
                      name
                    }
                  }
                }
              }
            }
          }
        }
        field_values {
          field_value_heading
          field_r
          field_l
        }
        field_video {
          uri {
            url
          }
        }
        field_video_still_image {
          uri {
            url
          }
        }
      }
    }
  }
`

export default connect(mapStateToProps, null)(DecisionPageTemplate);
