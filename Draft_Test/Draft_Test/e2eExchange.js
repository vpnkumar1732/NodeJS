describe("currency exchange", () => {
    it("login", () =>{
        browser.url('http://zero.webappsecurity.com/index.html');
        $('#signin_button').waitForExist();
        $('#signin_button').click();
        $('#user_login').setValue('username');
        $('#user_password').setValue('password');
        $("//input[@value='Sign in']").click();

    })

    it("click on Pay my Bills", () =>{
        $("#pay_bills_tab").waitForExist();
        $("#pay_bills_tab").click();
    })

    it("Purchase frequency",() =>{
        $("//a[contains(.,'Purchase Foreign Currency')]").waitForExist();
        $("//a[contains(.,'Purchase Foreign Currency')]").click();
        $("#pc_currency").selectByVisibleText("Canada (dollar)");
        $("#pc_amount").setValue(1000);
        $("#pc_inDollars_true").click();
        $("#purchase_cash").click();
        console.log("result is " + $("#alert_content").getText());
        expect($("#alert_content")).toHaveText("Foreign currency cash was successfully purchased.");
        browser.pause(2000);
    })
})