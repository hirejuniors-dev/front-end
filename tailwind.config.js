module.exports = {
	content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				purplePrimary: '#AF9BFF',
				whiteSmoke: 'whitesmoke',
				aliceBlue: '#E1ECF7',
				powderBlue: '#AECBEB',
				ruddyBlue: '#83B0E1',
				ruddyBlueDark: '#71A5DE',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			zIndex: {
				'-1': '-1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
