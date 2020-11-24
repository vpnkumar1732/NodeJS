//var expect = require('chai').expect;
//var timobj = require('../config/timer')
describe('E2E Login/logout flow',() =>{
   
    it('Login with invalid username/password',() =>{
        browser.url('http://zero.webappsecurity.com/index.html');
       // browser.pause(5000);
       $('#signin_button').waitForExist();
       $('#signin_button').click();
        $('#user_login').waitForExist();
        $('#user_login').setValue('Inavlid');
        $('#user_password').setValue('Inavlid');
        $("//input[@value='Sign in']").click();
        $("//div[@class='alert alert-error']").waitForExist();
        console.log( $("//div[@class='alert alert-error']").getText());
        expect($("//div[@class='alert alert-error']").getText()).to.equal("Login and/or password are wrong.");
      //  browser.pause(5000);
    })

    it('Login with valid username/password',() =>{
        $('#user_login').setValue('username');
        $('#user_password').setValue('password');
        $("//input[@value='Sign in']").click();
        $("//h2[text()='Cash Accounts']").waitForExist();
        console.log($("//h2[text()='Cash Accounts']").getText());
        expect($("//h2[text()='Cash Accounts']").getText()).to.equal("Cash Accounts");
       // browser.pause(5000);
    })

    it('logout',() =>{
        $(".icon-user").waitForExist(5000);
        $(".icon-user").click();
        $("#logout_link").waitForExist();
        $("#logout_link").click();
        //browser.pause(3000);

    })


})