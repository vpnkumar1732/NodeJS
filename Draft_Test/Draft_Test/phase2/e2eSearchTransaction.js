describe("search transaction", () =>{
    it("login", () =>{
        browser.url('http://zero.webappsecurity.com/index.html');
        browser.maximizeWindow();
        $('#signin_button').waitForExist();
        $('#signin_button').click();
        $('#user_login').setValue('username');
        $('#user_password').setValue('password');
        $("//input[@value='Sign in']").click();

    })

    it("click on Account Activities", () =>{
        $("#account_activity_tab").waitForExist();
        $("#account_activity_tab").click();
        // browser.keys("Tabe");
        // browser.keys("Enter");
    })

    it("find transaction tab"),() =>{
        browser.pause(2000);
        $("#tabs > ul > li:nth-child(2) > a").waitForExist();
        browser.debug();
        $("#tabs > ul > li:nth-child(2) > a").click();
    }

    it("search null result", () => {
        $("#aa_description").setValue("test");
        $("#aa_fromDate").setValue("2020-03-31");
        $("#aa_toDate").setValue("2020-04-30");
        $("#aa_fromAmount").setValue("100");
        $("#aa_toAmount").setValue("1000");
        $("#aa_type").selectByVisibleText("Withdrawal");
        $("//button[@type='submit'][text()='Find']").click();
        $("#filtered_transactions_for_account").waitForExist();
        console.log("text is " + $("//div[@class='well']").getText());
        expect($("//div[@class='well']").getText()).to.equal("No results.");

    })

    // it("search postive result", () => {
    //     $("#aa_fromDate").setValue("2012-09-05");
    //     $("#aa_toDate").setValue("2012-09-20");
    //     $("//button[@type='submit'][text()='Find']").click();
    //     $("//table[@class='table table-condensed table-hover']").waitForExist();
    //     var webTable = new WebTable($("fixed-header"));

    //     let tableobj = $$("//table[@class='table table-condensed table-hover']");
    //     console.log("count is " + tableobj.Count());
    // })
})