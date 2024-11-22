module.exports = {
	name: "enroutejewelry pages",
	description: "Static Site Generator web sites",
	skip: false,
	options: {
		frequency: 60 * 4,
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
        freshChrome: "site",
	},
	urls: [
		"https://enroutejewelry.com/",
		"https://enroutejewelry.com/collections/bestseller",
		"https://enroutejewelry.com/products/athena-bracelet?collection=athena-bracelet",
		"https://enroutejewelry.com/collections/holiday-gift-guide"
	]
};