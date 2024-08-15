import React from 'react';
import nextraConfig from 'redish101-shared-config/nextra';

const siteName = 'Swpp 官方文档';

// noinspection JSUnusedGlobalSymbols
export default {
  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="icon"
        viewBox="0 0 1024 1024"
        fill="currentcolor"
      >
        <path d="M469.333 810.667V341.333a128 128 0 0 0-128-128H128v597.334zM512 213.333A212.992 212.992 0 0 1 682.667 128h298.666v768H42.667V128h298.666c69.803 0 131.755 33.493 170.667 85.333m42.667 128v469.334H896V213.333H682.667a128 128 0 0 0-128 128" />
        <text
          xmlSpace="preserve"
          x="215"
          y="485"
          fillOpacity="null"
          stroke="null"
          strokeOpacity="null"
          strokeWidth="0"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="250"
          fontWeight="bold"
          transform="matrix(2.177 0 0 2.07854 -332.879 -331.617)"
        >
          S
        </text>
        <text
          xmlSpace="preserve"
          x="653"
          y="499"
          fillOpacity="null"
          stroke="null"
          strokeOpacity="null"
          strokeWidth="0"
          fontFamily="'Courier New', Courier, monospace"
          fontSize="250"
          fontWeight="bold"
          transform="matrix(1.78385 0 0 2.06235 -570.614 -357.776)"
        >
          W
        </text>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 'bold' }}>{siteName}</span>
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    // autoCollapse: true
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
