import React from "react";
import "./src/css/bootstrap-grid.css"
import "./src/css/styles.scss"
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
// export const shouldUpdateScroll = () => {
//   if (window.__navigatingToLink === true) {
//     return [0, 0];
//   }
//   return true;
// };
//
// export const onRouteUpdate = () => {
//   window.__navigatingToLink = false;
// };


const transitionDelay = 1500
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}