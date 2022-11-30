const pageScraper = require('./timeScraper');
const menuScraper = require('./menuScraper')
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		// await pageScraper.scraper(browser);	
		await menuScraper.scraper(browser);
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
	// finally {
	// 	await browser.close();
	// }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)