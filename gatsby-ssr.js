import React from "react";
import "./src/css/bootstrap-grid.css"
import "./src/css/styles.scss"
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};