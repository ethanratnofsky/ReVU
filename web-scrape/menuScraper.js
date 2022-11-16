const { TimeoutError } = require("puppeteer");

const scraperObject = {
    url: 'https://netnutrition.cbord.com/nn-prod/vucampusdining',
    
    async scraper(browser) {
        url = 'https://netnutrition.cbord.com/nn-prod/vucampusdining'
        async function helper(index) {
        //async function scrape(index) {
            let page = await browser.newPage();
            console.log(`Navigating to ${this.url}...`);
            await page.goto(this.url);
            // Navigate to the selected page

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

            info = await page.evaluate(async (index) => {
                dining_link = await document.querySelector(`#cbo_nn_unitImages_${1} > div > div > a`);

                dining_hall = dining_link.textContent
                
                await dining_link.click()
                await window.waitForSelector("#cbo_nn_menuTableDiv")
                //delay = ms => new Promise(resolve => setTimeout(resolve, ms))
                //await delay(1000)
                ret = []
                console.log("PRE MENU")
                menus = await document.querySelector("#cbo_nn_menuTableDiv").querySelector('div')
                console.log("POST MENU")
                
                menus.childNodes.forEach(async (menu) => {
                    blocks = await menu.querySelector('div > div')
                    blocks.childNodes.forEach(async (inner) => {
                        blocks.childNodes.forEach(async (block) => {
                            inner = block.querySelector('a')
                            console.log("PRE OPTIONS")
                            await inner.click()
                            //delay = ms => new Promise(resolve => setTimeout(resolve, ms))
                            //await delay(1000)
                            console.log("POST OPTIONS")
                            await window.waitForSelector("#itemPanel > section > div.table-responsive.pt-3 > table > tbody")
                            table = document.querySelector("#itemPanel > section > div.table-responsive.pt-3 > table > tbody")
                            console.log("PRE OPTIONS")
                            table.childNodes.forEach((row) => {
                                ret.push({dining_hall : row.textContent})
                            })
                            console.log("POST OPTIONS")
                        });
                    });
                });
                return ret
            });
            return info;
        }
        console.log("Start")
        val = await helper(1)
        console.log(val)
        console.log("End")
    }
}

module.exports = scraperObject;