describe("helper class", () => {
    it("login", () =>{
        browser.url('http://zero.webappsecurity.com/index.html');
        $('#signin_button').waitForExist();
        $('#signin_button').click();
        $('#user_login').setValue('username');
        $('#user_password').setValue('password');
        $("//input[@value='Sign in']").click();

    })

    it("clickon setting",() =>{
        $('.icon-cog').waitForExist();
        $('.icon-cog').click();
        $("#help_link").waitForExist();
        $("#help_link").click();
    })

    it("help topic", () => {
        $("//a[text()='How do I log into my account?']").waitForExist();
        $("//a[text()='How do I log into my account?']").click();
        expect($("//h3[text()='How do I log into my account?']")).toBeVisible();
    })
})