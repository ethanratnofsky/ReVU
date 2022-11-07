const { TimeoutError } = require("puppeteer");

const scraperObject = {
    url: 'https://netnutrition.cbord.com/nn-prod/vucampusdining',
    async scraper(browser){
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url); 

        // info = await page.evaluate(async (page) => {
        //     NetNutrition.UI.unitsSelectUnit(11)
        //     //fn = page.window['javascript:NetNutrition.UI.unitsSelectUnit']
        //     //fn = ['NetNutrition.UI.unitsSelectUnit(16)']
        //     //return typeof(fn)
        //     return 1
        // });

        info = await page.evaluate(async () => {
            dining_hall_links = Array.from(Array(20)).map((_, i) => document.querySelector(`#cbo_nn_unitImages_${i + 1} > div > div > a`));

            await dining_hall_links[0].click()
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
            await delay(1000)
            menus = document.querySelector("#cbo_nn_menuTableDiv")
            blocks = menus.childNodes[0].querySelector('div > div')
            tmp = blocks.childNodes[0].querySelector('div:nth-child(1) > a')
            await tmp.click()
            await delay(1000) 
            options = document.querySelector("#itemPanel > section > div.table-responsive.pt-3 > table > tbody")
            menu_items = []
            options.childNodes.forEach((option) => {
                tmp = option.textContent
                start = tmp.indexOf(".")
                end = tmp.search(/[0-9]/)
                ret = tmp.substr(start + 1, end - start - 1)
                if (ret.length == 0) {
                    ret = tmp
                }

                menu_items.push(ret)
            })

            return menu_items
        });

        console.log(info)
    }
}

module.exports = scraperObject;