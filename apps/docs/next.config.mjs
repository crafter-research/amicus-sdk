import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Multi-zone: this docs app is served under amicus.crafter.ing/docs via a
  // rewrite from the amicus app. assetPrefix makes its _next/* assets load from
  // its own origin (cross-origin) so they don't 404 against amicus.
  assetPrefix: process.env.DOCS_ASSET_PREFIX || undefined,
};

export default withMDX(config);
