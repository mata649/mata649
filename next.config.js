/** @type {import('next').NextConfig} */
require("dotenv").config()

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	publicRuntimeConfig: {
		apiURL: process.env["API_HOST"] ?? 'http://localhost:5000'
	},
	compiler: {
		styledComponents: true
	},
}

module.exports = nextConfig
