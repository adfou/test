import React from "react";
import { graphql } from "gatsby";
import LargeHeader from "../components/large-header";
import Footer from "../components/footer";
import ContentContainer from "../components/content-container";
import { setHTML } from "../helpers";

const End = ({ data }) => {
  const fields = data.nodeArticle;
  return (
    <div>
      <LargeHeader />
      <ContentContainer>
        <div className="begin-end-content">
          { setHTML(fields.body.processed) }
        </div>
      </ContentContainer>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query EndQuery {
    nodeArticle(drupal_internal__nid: {eq: 21} ) {
      title
      body {
        processed
      }
    }
  }
`
export default End;
