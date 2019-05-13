//main function: launcher
function launcher(){
  var uname = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  alert("Username: " + uname + " " + "Password: " + pass);

  //TODO: CALL RAUF AND MARK'S PART with a function

  var exampleGradeSystem = returnExampleGradesSystem();
  submittedData(uname, exampleGradeSystem); //uploads the grades to firebase

  console.log(pullGrades());
  window.location.href = "dispGrades.html";

}

//Log into HAC
const puppeteer = require('puppeteer');

(async () => {
  var username = "3711"; //Change the value and place -> have it retrieved from the webpage
  var password = "lm5d6765"; //Change the value and place -> have it retrieved from the webpage
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

  //Click on classwork
  await page.click('[id="hac-Classes"]');

  //wait for the page to load
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'load' }),

  ]);

  //Click on "full view" then "collapse all"
  //await page.click('[id="btnView"]');
  //await page.click('[id="plnMain_btnCollapseExpand"]');


  //Take a screenshot of what the headless chrome displays
  await page.screenshot({path: 'mainpage.png', fullPage: true});
  browser.close()
  console.log("Done")
})();
