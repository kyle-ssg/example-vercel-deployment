import fetch from "isomorphic-unfetch"; // we do this here instead of _data.js as it intereferes with react-native
global.fetch = fetch;

if (typeof projectOverrides !== "undefined") {
  global.Project = {
    ...global.Project,
    ...projectOverrides, // environment.js (also app.yaml if using app engine)
  };
}


import "../common/utils";
import "./api";
import "./libs";

import Link from "next/link";

global.Link = Link;

if (typeof E2E === 'undefined') {
  global.E2E = false;
}
