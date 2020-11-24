describe("Homepage FAQ Accordion", function () {
    beforeEach(function () {
      browser.url("http://127.0.0.1:8303/");
    });
  
    it("should show first section on page load", function () {
        $("//li[@class='menu-text']").waitForExist();
        console.log("result is " + $("//li[@class='menu-text']").getAttribute("role"));
        //$$("//div[@class='accordion-content']").waitForExist();
//      var firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");
        const testobj = $$("//div[@class='accordion-content']");
        console.log("count is " + testobj.length);
        var firstHeight =  testobj[0].getAttribute("height");
        console.log("height is " + firstHeight);
//getCSSProperty(testobj[0], "height");

     // expect(firstHeight.parsed.value).to.be.greaterThan(0);
    });
  
    // it("should not show other content", function () {
    //   var secondDisplay = browser.getCSSProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "display");
    //   expect(secondDisplay.value).to.equal("none");
    // });
  
    // it("should expand/hide content on click", function () {
    //   browser.click(".accordion .accordion-item:nth-of-type(2) a");
  
    //   browser.pause(500);
  
    //   var secondHeight =  browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "height");
    //   expect(secondHeight.parsed.value).to.be.greaterThan(0);
  
    //   var firstDisplay = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "display");
    //   expect(firstDisplay.value).to.equal("none");
    // });
  
  });