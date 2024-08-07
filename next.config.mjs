import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export" // if want use ssr, remove this.
}

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
