import React from "react";
import { Helmet } from "react-helmet";

export default ({ element }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/xib4hft.css" />
      </Helmet>
      { element }
    </>
  );
}
