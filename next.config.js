/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  publicRuntimeConfig:{
	apiURL: 'http://localhost:5000'
  },
  compiler:{
	styledComponents:true
  }
}

module.exports = nextConfig
