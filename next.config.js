/** @type {import('next').NextConfig} */

module.exports = {
	images: {
		remotePatterns: [
			{
				hostname: 'raw.githubusercontent.com',
			},
			{
				hostname: 'v5.airtableusercontent.com',
			},
		],
	},
};
