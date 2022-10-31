const scraperObject = {
    url: 'https://netnutrition.cbord.com/nn-prod/vucampusdining',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url); 
        contents = await page.evaluate(() => {
            let block = document.querySelector('#cbo_nn_unitDataList > div');
            let info = block.querySelectorAll('a')
            
            let results = []
            info.forEach((item) => {
                results.push({
                    x : Array.from(info.onclick.call()).map(x => x.textContent)
                });
            });

            return results;
        });
    }
}

module.exports = scraperObject;