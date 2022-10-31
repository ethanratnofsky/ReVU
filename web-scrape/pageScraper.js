const scraperObject = {
    url: 'https://campusdining.vanderbilt.edu/where-to-dine/',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url); 
        title = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('#accordion')).map(x => x.textContent)
        });
        console.log(title)
        //headings = await page.evaluate(() => {
          
            //headings_elements = document.querySelectorAll("h2 .mw-headline");
          //headings_array = Array.from(headings_elements);
          //return headings_array.map(heading => heading.textContent);
        //});
        // console.log(headings);
        await browser.close();
        /*
		// Wait for the required DOM to be rendered
		await page.waitForSelector('.page_inner');
		// Get the link to all the required books
		let urls = await page.$$eval('section ol > li', links => {
			// Make sure the book to be scraped is in stock
			links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
			// Extract the links from the data
			links = links.map(el => el.querySelector('h3 > a').href)
			return links;
		});
		console.log(urls);
        */
    }
}

module.exports = scraperObject;