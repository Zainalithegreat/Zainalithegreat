const puppeteer = require('puppeteer')


const product_url = 'https://www.bestbuy.com/site/asus-tuf-rtx3070ti-8gb-gddr6x-pci-express-4-0-graphics-card-black/6467840.p?skuId=6467840';


async function addToCart(){
    var x = false
    while(x == false){
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto(product_url);
        await page.waitFor(2000)

        let h = false
        while (h == false)
            try{
                await page.click("button[class= 'c-button c-button-primary c-button-lg c-button-block c-button-icon c-button-icon-leading add-to-cart-button']", elem => elem.click());
                await page.waitFor(1000)
                await page.click("button[class= 'c-button c-button-primary c-button-lg c-button-block c-button-icon c-button-icon-leading add-to-cart-button']", elem => elem.click());
                break
            }catch(err){
                console.log('Not In Stock')
            }
        await page.waitFor(4000)
        await page.keyboard.press("Tab")
        await page.waitFor(1000)
        await page.keyboard.press("Tab")
        await page.keyboard.press('Enter')
        await page.waitFor(1000)
        await page.keyboard.press('Escape')
        
        await page.waitForSelector("button[class= 'btn btn-lg btn-block btn-primary']")
        await page.click("button[class= 'btn btn-lg btn-block btn-primary']", elem => elem.click());
        await page.waitFor(1000)
        
        

        await page.waitForNavigation()
        await page.type("input[id= 'fld-e']", 'zain.alithe.hi@gmail.com' , {delay: 20})
        await page.type("input[id= 'fld-p1']", 'Zainali786', {delay: 20})
        await page.waitFor(1000)
        await page.keyboard.press("Tab")
        await page.waitFor(100)
        await page.keyboard.press("Tab")
        await page.waitFor(100)
        await page.keyboard.press("Tab")
        await page.waitFor(100)
        await page.keyboard.press("Tab")
        await page.waitFor(100)
        await page.keyboard.press("Tab")
        await page.waitFor(500)
        await page.keyboard.press("Enter")
        await page.waitForNavigation();
        await page.click("button[class = 'btn btn-lg btn-block btn-secondary']", elem=> elem.click)


        try{
            await page.waitForNavigation()
            await page.waitFor(2000)
            await page.type("input[id = 'cvv']", '123')
            await page.waitFor(1000)
            await page.keyboard.press("Tab")
            await page.waitFor(100)
            await page.keyboard.press("Tab")
            await page.waitFor(100)
            await page.keyboard.press("Tab")
            await page.waitFor(100)
            await page.keyboard.press("Tab")
            await page.waitFor(100)
            await page.keyboard.press("Enter")
            await page.waitFor(1000)
            await page.type("input[id = 'address-input']", '11885 sw bullmountain rd', {delay: 50})
            await page.waitFor(1000)
            await page.select('#state.tb-select', 'OR',)
            await page.click("button[class= 'c-button c-button-secondary c-button-md save-button']", elem => elem.click());
            await page.waitFor(1000)
            await page.type("input[id = 'city']", 'portland')
            await page.type("input[id = 'postalCode']", '97224')
            await page.click("button[class= 'c-button c-button-secondary c-button-md save-button']", elem => elem.click());
            await page.waitFor(4000)
            console.log('done')
            await page.click("button[class = 'btn btn-lg btn-block btn-primary']", elem=> elem.click)
        }catch(err){
            await page.type("input[id = 'credit-card-cvv']" , '123')
            await page.type("input[id = 'firstName']" , 'Zain', {delay: 20})
            await page.type("input[id = 'lastName']" , 'Ali' , {delay: 20})
            await page.type("input[id = 'street']" , '11885 sw bullmountain rd' , {delay: 20})
            await page.type("input[id = 'city']" , 'portland' , {delay: 20})
            await page.select('#state.tb-select' , 'OR')
            await page.type("input[id = 'zipcode']" , '97224' , {delay: 10})
            console.log('done')
            await page.click("button[class = 'btn btn-lg btn-block btn-primary']", elem=> elem.click)
        }
        browser.close()
        
    }
}



    addToCart();


    