beforeEach(function (){
    browser.url("https://www.techlistic.com/p/selenium-practice-form.html");
    browser.maximizeWindow();
    });
    describe("add elemnt functionality", () => {
    it("scenario1", () => {
        console.log("strat test here");
        const firstName = $("[name = 'firstname']");
        const lastName = $("[name = 'lastname']");
        const genderMale = $("#sex-0");
        const yearExp = $("#exp-0");
        const datePicker = $('#datepicker');
        const professionType = $('#profession-0');
        const automationTool = $('#tool-2');
        const contenantName = $('#continents');
        const northAmericaCOntinent= $("//select[@id='continents']/option[contains(.,'North America')]");
        const seleniumWebElementsCommandsoption= $("//select[@id='selenium_commands']/option[contains(.,'WebElement Commands')]");
        const submitButton = $('#submit');



        firstName.setValue("Vipin");
        lastName.setValue("kumar");
        genderMale.click();
        yearExp.click();
        const today = new Date();
//        datePicker.click();
        datePicker.setValue(today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate());
        professionType.click();
        automationTool.click();
       // contenantName.click();
        northAmericaCOntinent.click();
        seleniumWebElementsCommandsoption.click();
        browser.pause(5000);
       submitButton.click();


                    browser.pause(5000);
        
    });
    });