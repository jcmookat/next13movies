/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		silent: true,
	},
	images: {
		domains: ['image.tmdb.org'],
	},
}

module.exports = nextConfig
