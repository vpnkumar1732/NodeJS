var timetype = require('../config/timer')
describe("webdriverIo basic", () =>{

   /* it("explictWait implementation",()=>{
        browser.url("https://webdriver.io")
        const docsButton = $("//a[text() ='Docs']");
        docsButton.click();
        const txtGettingStarted = $('#__docusaurus')
        expect(txtGettingStarted).toBeVisible();
    })

    it("verify get text functionality",()=>{
        browser.url("https://www.iana.org/domains/reserved")
        const txtheader = $('h1')
        txtheader.waitForExist();
        expect(txtheader).toHaveText('IANA-managed Reserved Domains');
    })*/

    it('get element attribute', () =>{
        browser.url('https://devexpress.github.io/testcafe/example/');
        browser.maximizeWindow();
        const btnSubmit = $('#submit-button');
        btnSubmit.waitForExist();
        const typeText = btnSubmit.getAttribute('type')
        console.log("attribute value is " + typeText);
        expect(btnSubmit).toHaveAttrContaining('type','submit');    
       // browser.saveScreenshot("test.png")
       browser.pause(timetype.medium);
    })

   
})