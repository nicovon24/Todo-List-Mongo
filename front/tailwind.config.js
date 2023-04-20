/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".main-bg": {
					background:
						"radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%), linear-gradient(121.28deg, #669600 0%, #ff0000 100%), linear-gradient(360deg, #0029ff 0%, #8fff00 100%), radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%), radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);",
					backgroundBlendMode: "screen, color-dodge, overlay, difference, normal",
				},
			});
		}),
	],
};
