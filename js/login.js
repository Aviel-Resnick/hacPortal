//Log into HAC
const puppeteer = require('puppeteer');

(async () => {
  var username = "something"; //Change the value and place -> have it retrieved from the webpage
  var password = "something"; //Change the value and place -> have it retrieved from the webpage
  const browser = await puppeteer.launch({headless: true})
  const page = await browser.newPage()
  await page.goto('https://hac40.eschoolplus.powerschool.com/HAC4_001/Account/LogOn?ReturnUrl=%2fHAC4_001%3fSiteCode%3dlmrlive&SiteCode=lmrlive')

  //Input the values
  await page.type('#LogOnDetails_UserName', username)
  await page.type('#LogOnDetails_Password', password)

  //Load the new page
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'load' }),
    page.click('[class="sg-button sg-logon-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"]'),
  ]);

  //Take a screenshot of what the headless chrome displays
  await page.screenshot({path: 'mainpage.png'});
  browser.close()
  console.log("Done")
})()
