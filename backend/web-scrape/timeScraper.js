const URL = 'https://campusdining.vanderbilt.edu/where-to-dine/'

const scraper = async (browser) => {
    let page = await browser.newPage();
    console.log(`Navigating to ${URL}...`);
    // Navigate to the selected page
    await page.goto(URL);
    contents = await page.evaluate(() => {
        let accordions = document.querySelectorAll('#accordion');
        let results = [];
        
        // Scan through all accordions
        accordions.forEach((item) => {
            // Find table headers
            table_headers = []
            table_header = item.querySelectorAll('thead')
                               .forEach((hdr) => {
                                    cur = Array.from(hdr.querySelectorAll('th')).map(x => x.textContent)
                                    table_headers.push(cur)
                               })

            // Find tables
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
            
            // Push all to resulting array
            const titles = Array.from(item.querySelectorAll('h4.panel-title')).map(x => x.textContent.replace(/(^NEW )/, ""))
            let days = [];
            let times = [];
            tables.forEach((table) => {
                table.forEach((day) => {
                    days.push(day[0]);
                })
                times.push(table.slice(1))
            })
            for(let i = 0; i < titles.length; i++) {
                results.push({
                    title : titles[i],
                    table_header : table_headers[i],
                    days : days,
                    times: times
                });
            }
        });
        return results;
    });
    return contents
}

module.exports = scraper;