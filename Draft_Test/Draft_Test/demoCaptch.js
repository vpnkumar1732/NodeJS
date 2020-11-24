const logic1 = require('../Page-Object/Components/captchalogic')
//import captcha from "../Page-Object/Components/captchalogic"
describe("demo captcha", () => {
    it("open url and verify captcha logic", () =>{
        browser.url("https://ultimateqa.com/complicated-page/");
        $("#et_pb_contact_name_0").waitForExist();
        $("#et_pb_contact_name_0").setValue("Vipin");
        $("#et_pb_contact_email_0").setValue("test@test.com")
        $("#et_pb_contact_message_0").setValue(`this 
        is 
        mulit line`);
        let text = $(".et_pb_contact_captcha_question").getText();
        // let parm = text.split('+');
        // let result= parseInt(parm[0].trim()) + parseInt(parm[1].trim());
        //console.log("result is " + result);
        let captcharesultbox = $$("//input[@class='input et_pb_contact_captcha']");
       // console.log("counter is " + captcharesultbox.length);
        captcharesultbox[0].setValue(logic1.logicCaptch(text));
        browser.pause(2000);
        let bttnsubmit = $$("//button[@class='et_pb_contact_submit et_pb_button']");
        bttnsubmit[0].click();
       // $("//p[text()='Make sure you fill in all required fields.']").waitForExist();

        
    })
   
    
})