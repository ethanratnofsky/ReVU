const { TimeoutError } = require("puppeteer");

const URL = 'https://netnutrition.cbord.com/nn-prod/vucampusdining'

async function scraper(browser) {
    async function helper(index) {
        let page = await browser.newPage(); // Open browser

        // Navigate to the selected page
        console.log(`Navigating to ${URL}...`);
        await page.goto(URL);

        // Exposes 
        await page.exposeFunction('delay', async () => {
            await page.waitForNavigation({waitUntil: 'networkidle2'})
        });

        await page.exposeFunction('waitForSelector', async (x) => {
            await page.waitForSelector(x)
        });

        // Dialog
        page.on('dialog', async dialog => {
            console.log(dialog.message())
            await dialog.dismiss()
        })

        const info = await page.evaluate(async (index) => {
            let dining_link = await document.querySelector(`#cbo_nn_unitImages_${1} > div > div > a`);
            let dining_hall = dining_link.textContent;
            let ret = {
                [dining_hall]: {}
            }

            await dining_link.click(); // Click on dining hall name

            await window.waitForSelector("#cbo_nn_menuTableDiv") // Wait until menu options appears
            
            //delay = ms => new Promise(resolve => setTimeout(resolve, ms))
            //await delay(1000)

            // Find the element containing
            const menus = await document.querySelector("#cbo_nn_menuTableDiv").querySelector('div')

            // Parse 
            const menu_arr = await Array.from(menus.childNodes)
                                    .map(x => x.querySelector('div > div'))
                                    .map(x => Array.from(x.childNodes))
                                    .reduce((acc, curVal) => { return acc.concat(curVal) }, [])
                                    .map(x => x.querySelector('a'))
            
            menu_arr.forEach(async (inner) => {
                delay = ms => new Promise(resolve => setTimeout(resolve, ms));
                await delay(1000)
                await inner.click();
                await delay(1000);
                //await window.waitForSelector("tbody")
                table = document.querySelector("tbody");
                cur_table = Array.from(table.childNodes)
                                    .map(row => row.textContent)

                meal_slot = inner.textContent
                ret[dining_hall][meal_slot] = cur_table
                alert("\n")
                alert(inner.textContent)
                alert(cur_table)
                alert("\n")
                
                //await dining_link.click()
                //await delay(1000)
                //await window.waitForSelector("#disclaimerPanel > section")
            });
            console.log(ret)
        });

        return info;
    };

    const retVal = await helper(1);

    console.log("DONE!");
    
    return retVal;
};


// Rand: 1, Commons: 2, Kissam: 3, EBI: 10, Zeppos: 18, Rothschild: 19
// Yes I know this is bad
const halls = [1, 2, 3, 10, 18, 19]
console.log("Start")
// await helper(2)
// await helper(3)
// await helper(10)
// await helper(18)
// await helper(19)
console.log("End")

module.exports = {
    scraper
};


/**
var ret = {}

dining_link = await document.querySelector(`#cbo_nn_unitImages_${1} > div > div > a`);
dining_hall = dining_link.textContent
ret[dining_hall] = {};
i = 0
await dining_link.click()
//await window.waitForSelector("#cbo_nn_menuTableDiv")
delay = ms => new Promise(resolve => setTimeout(resolve, ms))
await delay(1000)
menus = await document.querySelector("#cbo_nn_menuTableDiv").querySelector('div')

menu_arr = await Array.from(menus.childNodes)
                       .map(x => x.querySelector('div > div'))
                       .map(x => Array.from(x.childNodes))
                       .reduce((acc, curVal) => { return acc.concat(curVal) }, [])
                       .map(x => x.querySelector('a')

menu_arr.forEach(async (inner) => {
    delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(1000)
    await inner.click();
    await delay(1000);
    // await window.waitForSelector("tbody")
    table = document.querySelector("tbody");
    cur_table = Array.from(table.childNodes)
                     .map(row => row.textContent)
    console.log(cur_table)
    meal_slot = inner.textContent
    ret[dining_hall][meal_slot] = cur_table
});
console.log(ret)
 */