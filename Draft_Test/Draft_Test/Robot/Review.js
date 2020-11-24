describe("Homepage FAQ Accordion", function () {
    beforeEach(function () {
        browser.url("http://127.0.0.1:8303/product-page.html");
        $("#panel1-label").waitForExist();
    })

    afterEach(function(){
        browser.close;
    })

    it("Review postive page logic", () =>{
       
        $("#review-email").setValue("test.com");
        browser.keys("Tab");
        $("//p[@class='form-error is-visible']").waitForExist();
        $("#review-email").setValue("test@test.com");
        $("#review-content").setValue("review-content");
       
        $("//button[text()='Submit Review']").click();
        var reviewtext = $(".comment=review-content").isExisting();
        expect(reviewtext, "Comment text exist").to.be.true;
        // const reviewtest = $("#panel1").$(".reviews").$$("div");
        // console.log("review object count is " + reviewtest.length);
        // const email = reviewtest[reviewtest.length-1].$(".email");
        // expect(email.getText()).to.equal("test@test.com");
    });


    // it('should show an error message if the input is wrong', function () {
    //     // assert that error message isn't showing to start
    //     var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
    //     expect(isErrorShowing).to.be.false;
    
    //     // submit form without entering content
    //     browser.submitForm("#review-content");
    
    //     // assert that error message is now showing
    //     var isErrorShowing = browser.isVisible("p=There are some errors in your review.");
    //     expect(isErrorShowing).to.be.true;
    //   });

    it("review all error message ", () => {
        let mainErrorMessage = $("//p[text()=' There are some errors in your review.']").isClickable();
        let emailErrorMessage = $("//p[contains(text(),'Please enter a valid email address.')]").isClickable();
        let textErrorMessage = $("//p[contains(text(),' A review without text isn')]").isClickable();
        console.log(" bool valueis " + mainErrorMessage);
        expect(mainErrorMessage, "Main error message ").to.be.false;
        expect(emailErrorMessage, "emailErrorMessage").to.be.false;
        expect(textErrorMessage, "textErrorMessage").to.be.false;
        $("//button[text()='Submit Review']").click();
        let mainFocus = $("//p[text()=' There are some errors in your review.']").isFocused();
        let emailFocus = $("//p[contains(text(),'Please enter a valid email address.')]").isFocused();
        let textFocus = $("//p[contains(text(),' A review without text isn')]").isFocused();
        console.log("Email focus is " + emailFocus);
        expect(mainFocus, "mainFocus").to.be.false;
        expect(emailFocus, "emailFocus").to.be.true;
        expect(textFocus, "textFocus").to.be.false;
        mainErrorMessage = $("//p[text()=' There are some errors in your review.']").isClickable();
        emailErrorMessage = $("//p[contains(text(),'Please enter a valid email address.')]").isClickable();
        textErrorMessage = $("//p[contains(text(),' A review without text isn')]").isClickable();
        expect(mainErrorMessage, "Main error message ").to.be.true;
        expect(emailErrorMessage, "emailErrorMessage").to.be.true;
        expect(textErrorMessage, "textErrorMessage").to.be.true;
        
        
    });

    it("review email error message", () => {

        let mainErrorMessage = $("//p[text()=' There are some errors in your review.']").isClickable();
        let emailErrorMessage = $("//p[contains(text(),'Please enter a valid email address.')]").isClickable();
        let textErrorMessage = $("//p[contains(text(),' A review without text isn')]").isClickable();
        expect(mainErrorMessage, "Main error message ").to.be.false;
        expect(emailErrorMessage, "emailErrorMessage").to.be.false;
        expect(textErrorMessage, "textErrorMessage").to.be.false;
        $("//button[text()='Submit Review']").click();
        mainErrorMessage = $("//p[text()=' There are some errors in your review.']").isClickable();
        emailErrorMessage = $("//p[contains(text(),'Please enter a valid email address.')]").isClickable();
        textErrorMessage = $("//p[contains(text(),' A review without text isn')]").isClickable();
        expect(mainErrorMessage, "Main error message ").to.be.true;
        expect(emailErrorMessage, "emailErrorMessage").to.be.true;
        expect(textErrorMessage, "textErrorMessage").to.be.true;
        $("#review-email").setValue("test@test.com");
        browser.keys("Tab");
        emailErrorMessage = $("//p[contains(text(),'Please enter a valid email address.')]").isClickable();
        expect(emailErrorMessage, "emailErrorMessage").to.be.false;
    });


  
  });