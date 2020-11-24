describe("Make payments", () =>{
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

    it("Make Payments",()=>{
        $("//a[contains(.,'Pay Saved Payee')]").waitForExist();
        $("//a[contains(.,'Pay Saved Payee')]").click();
        $("#sp_payee").waitForExist();
        $("#sp_payee").selectByVisibleText("Bank of America");
        $("#sp_account").selectByVisibleText("Credit Card");
        $("#sp_amount").setValue("10000");
        $("#sp_date").setValue("2020-05-06");
        $("#sp_description").setValue("text");
        $("#pay_saved_payees").click();
        $("#alert_content").waitForExist();
        console.log("result is " + $("//div[@id='alert_content']/span").getText());
        expect( $("//div[@id='alert_content']/span")).toHaveText("The payment was successfully submitted.");
      //  expect( $("#alert_content")).toHaveText("The payment was successfully submitted.");
    })
})