const { TimeoutError } = require("puppeteer");

const scraperObject = {
    url: 'https://netnutrition.cbord.com/nn-prod/vucampusdining',
    async scraper(browser) {
        let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		// Navigate to the selected page
		await page.goto(this.url);

        await page.exposeFunction('delay', async () => {
            await page.waitForNavigation({waitUntil: 'networkidle2'})
        });

        await page.exposeFunction('waitForSelector', async (x) => {
            await page.waitForSelector(x)
        });

        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()
        })

        info = await page.evaluate(async () => {
            dining_halls = ["Rand Dining Center",
            "The Kitchen at Kissam",
            "Rothschild Dining Center - Contains Peanuts and Treenuts",
            "E. Bronson Ingram Dining Center",
            "Zeppos Dining",
            "The Commons Dining Center"]
            dining_hall_links = Array.from(Array(20))
                        .map((_, i) => document.querySelector(`#cbo_nn_unitImages_${i + 1} > div > div > a`))
                        .filter(ele => dining_halls.includes(ele.textContent))
            ret = []

            dining_hall_links.forEach(async (hall) => {
                await hall.click()
                await window.waitForSelector("#cbo_nn_menuTableDiv")
                
                menus = await document.querySelector("#cbo_nn_menuTableDiv")
                alert(hall.textContent)
                alert(menus.textContent)


                menus.childNodes.forEach(async (menu) => {
                    blocks = await menu.querySelector('div > div')
                    blocks.childNodes.forEach(async (block) => {

                        info = await block.querySelector('div:nth-child(1) > a')
                        
                        await info.click();
                        await window.waitForSelector("#itemPanel > section > div.table-responsive.pt-3 > table > tbody")

                        options = await document.querySelector("#itemPanel > section > div.table-responsive.pt-3 > table > tbody")
                        menu_items = []

                        options.childNodes.forEach(async (option) => {
                            tmp = option.textContent
                            start = tmp.indexOf(".")
                            end = tmp.search(/[0-9]/)
                            fin_str = tmp.substr(start + 1, end - start - 1)
                            if (fin_str.length == 0) {
                                fin_str = tmp
                            }
                            menu_items.push(fin_str)
                        });
                        ret.push(menu_items)
                        alert(ret)
                    })
                });
            });
            return ret
        });
        console.log("START")
        info.forEach((ele) => {
            console.log(ele.textContent)
        })
        console.log("DONE")
    }
}

module.exports = scraperObject;