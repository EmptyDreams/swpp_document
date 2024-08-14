import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // if want use ssr, remove this.
  images: {
    unoptimized: true, // image optimization cannot work with ssg
  },
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

export default withNextra(nextConfig);
