const scraperObject = {
    url: 'https://campusdining.vanderbilt.edu/where-to-dine/',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url); 
        contents = await page.evaluate(() => {
            let accordions = document.querySelectorAll('#accordion');
            let results = [];
            
            accordions.forEach((item) => { //document.querySelector('#accordion').querySelector('tbody').querySelectorAll('tr').forEach((row) => {console.log(row.textContent)})
                tables = [];

                item.querySelectorAll('tbody')
                    .forEach((table) => {
                        cur_table = []
                        table.querySelectorAll('tr')
                            .forEach((cur_row) => {
                                date = cur_row.querySelector('th')
                                time_slots = cur_row.querySelectorAll('td')
                                if (date && time_slots) {                                
                                     cur_table.push({
                                       day : date.textContent,
                                       times : Array.from(time_slots).map(x => x.textContent)
                                     })
                                }
                        });
                        tables.push({
                            table : cur_table
                        })
                    })
                results.push({
                    title : Array.from(item.querySelectorAll('h4.panel-title')).map(x => x.textContent),
                    table_header : Array.from(item.querySelector('thead').querySelectorAll('th')).map(x => x.textContent),
                    table_body : tables
                });
            });
            return results;
        });
        console.log(contents)
    }
}

module.exports = scraperObject;