const timeScraper = require('./timeScraper');
const menuScraper = require('./menuScraper')
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		times = await timeScraper(browser);
		return times
		// await menuScraper.scraper(browser);
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)