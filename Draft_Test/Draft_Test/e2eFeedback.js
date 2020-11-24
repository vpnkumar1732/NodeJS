describe("E2E feedback", () =>{
    it("enter feedback details",() =>{
        browser.url('http://zero.webappsecurity.com/index.html');
        $("#feedback").waitForExist();
        $("#feedback").click();
        $("#feedback-title").waitForExist();
        $("#name").setValue("Name");
        $("#email").setValue("email@test.com");
       // $("#subject").click();
        $("#subject").setValue("Payment info");
        $("#comment").setValue(`kkhjhjhj
        hjkhhkjhkjh
        kkjkljkjkj`);
        $("//input[@name='submit']").click();
        expect(browser).toHaveUrl("http://zero.webappsecurity.com/sendFeedback.html");
        
        browser.pause(1000);
    })
})