module.exports = {
	name: "enroutejewelry",
	description: "Static Site Generator web sites",
	skip: false,
	options: {
		frequency: 60 * 4,
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
	},
	urls: [
		"https://enroutejewelry.com/",
		"https://sg.pandora.net/en",
		"https://www.missoma.com/",
		"https://www.gorjana.com/",
		"https://mejuri.com/eu/en/",
		"https://www.pdpaola.com/"
	]
};