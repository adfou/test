import React from "react";
import { graphql } from "gatsby";
import { setHTML } from "../helpers";
import PageTitle from "../components/page-title";
import Layout from "../components/layout";

const ArticlePageTemplate = ({ data }) => {
  const node = data.nodeArticle;
  return (
    <Layout className="article-page">
      <PageTitle>
        { node.title }
      </PageTitle>
      { setHTML(node.body.processed) }
    </Layout>
  );
}


export const query = graphql`
  query($id: String!) {
    nodeArticle(id: {eq: $id} ) {
      title
      body {
        processed
      }
    }
  }
`

export default ArticlePageTemplate;
