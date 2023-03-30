/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	publicRuntimeConfig: {
		apiURL: process.env["API_HOST"] ?? 'http://localhost:5000'
	},
	compiler: {
		styledComponents: true
	},
	basePath: "/nextjs-pages",
	assetPrefix: "/nextjs-pages"
}

module.exports = nextConfig
