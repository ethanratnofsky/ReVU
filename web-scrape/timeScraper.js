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
            
            accordions.forEach((item) => {
                table_headers = []
                table_header = item.querySelectorAll('thead')
                                   .forEach((hdr) => {
                                        cur = Array.from(hdr.querySelectorAll('th')).map(x => x.textContent)
                                        table_headers.push(cur)
                                   })

                tables = [];

                item.querySelectorAll('tbody')
                    .forEach((table) => {
                        cur_table = [];
                        table.querySelectorAll('tr')
                             .forEach((cur_row) => {
                                row = Array.from(cur_row.childNodes).map(x => x.textContent).filter(x => x[0] != '\n')
                                cur_table.push(row);
                    });
                        tables.push(cur_table);
                    });

                results.push({
                    title : Array.from(item.querySelectorAll('h4.panel-title')).map(x => x.textContent.replace(/(^NEW )/, "")),
                    table_header : table_headers,
                    table_body : tables
                });
            });
            return results;
        });
        
        contents.forEach((item) => {
            console.log(item['title'])
            console.log(item['table_header'])
            console.log(item['table_body'])
        });
    }
}

module.exports = scraperObject;