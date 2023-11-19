/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	experimental: {
		turbo: {
			resolveAlias: {
				underscore: 'lodash',
				mocha: { browser: 'mocha/browser-entry.js' },
			},
		},
	},
	images: {
		remotePatterns: [{ protocol: "https", hostname: "**" }],
		domains: ["https://portfolio-anhtuanlee.vercel.app/"],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		prependData: `@import "~src/styles/_variables.scss";
    @import "~src/styles/_mixins.scss";
    @import "~src/styles/_types.scss";
  `,
	},
};

module.exports = nextConfig;
