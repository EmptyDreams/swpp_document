import React from "react";
import NextraConfig from "redish101-shared-config/nextra";

const siteName = "swpp"

export default {
  logo: <span>{siteName}</span>,
  project: {
    link: "https://github.com/EmptyDreams/swpp-backends",
  },
  docsRepositoryBase:
    "https://github.com/EmptyDreams/swpp_document/tree/main/",
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${siteName}`,
    };
  },
  ...NextraConfig,
};
