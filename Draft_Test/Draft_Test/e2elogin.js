//var timobj = require('../config/timer')
describe('E2E Login/logout flow',() =>{
    // const btnSignIn = $('#signin_button');
    // const txtUserLogin = $('#user_login');
    // const txtUserPassword = $('#user_password');
    // const btnLogin = $('[submit]');
    // const txtErrorConfirmation = $("//div[@class='alert alert-error']");
    // const txtSuccessfullLogin = $("//h2[text()='Cash Accounts']");
    // const btnToggel = $("//a[@class='dropdown-toggle']");
    // const btnLogout =$('#logout_link');

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
        expect($("//div[@class='alert alert-error']")).toBeVisible();
      //  browser.pause(5000);
    })

    it('Login with valid username/password',() =>{
        $('#user_login').setValue('username');
        $('#user_password').setValue('password');
        $("//input[@value='Sign in']").click();
        $("//h2[text()='Cash Accounts']").waitForExist();
        
        expect($("//h2[text()='Cash Accounts']")).toBeVisible();
       // browser.pause(5000);
    })

    it('logout',() =>{
        $(".icon-user").waitForExist(5000);
        $(".icon-user").click();
        $("#logout_link").waitForExist();
        $("#logout_link").click();
        browser.pause(3000);

    })


})