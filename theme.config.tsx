import React from 'react';
import nextraConfig from 'redish101-shared-config/nextra';

const siteName = 'Swpp 官方文档';

// noinspection JSUnusedGlobalSymbols
export default {
  logo: (
    <>
      <img src="/favicon.ico" alt="logo" width="24" height="24" />
      <span style={{ marginLeft: '.4em', fontWeight: 'bold' }}>{siteName}</span>
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  project: {
    link: 'https://github.com/EmptyDreams/swpp-backends',
  },
  docsRepositoryBase: 'https://github.com/EmptyDreams/swpp_document/tree/main/',
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${siteName}`,
    };
  },
  footer: {
    text: `© 2024-present ${siteName}`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:description" content="Service Worker Plus Plus 的官方文档" />
      <meta name="keywords" content="ServiceWorker, swpp" />
    </>
  ),
  ...nextraConfig,
};