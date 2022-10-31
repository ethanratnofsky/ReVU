const scraperObject = {
    url: 'https://campusdining.vanderbilt.edu/where-to-dine/',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url); 
        contents = await page.evaluate(() => {
            let accordions = document.querySelectorAll('#accordion')
            let results = []
            
            accordions.forEach((item) => {
                results.push({
                    title : Array.from(item.querySelectorAll('h4.panel-title')).map(x => x.textContent),
                    table_header : Array.from(item.querySelector('thead').querySelectorAll('th')).map(x => x.textContent),
                    table_body : Array.from(item.querySelector('tbody').querySelectorAll('th,td')).map(x => x.textContent) // DAY BREAKFAST LUNCH DINNER
                                                                                                    // Day time        time   time
                })
                
            });
            
            return results;
        });

        console.log(contents)
    }
}

module.exports = scraperObject;