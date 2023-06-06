/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import wrapWithProvider from "./wrap-with-provider";
import wrapWithHelmet from "./wrap-with-helmet";
export const wrapRootElement = wrapWithProvider;
export const wrapPageElement = wrapWithHelmet;
