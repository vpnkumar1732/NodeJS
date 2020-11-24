var timetype = require('../config/timer')

describe("input value functionality", ()=>{
    it('inputs',()=>{
        browser.url('https://devexpress.github.io/testcafe/example/');
        const txtDeveloperName = $('#developer-name');
        txtDeveloperName.waitForExist();
        txtDeveloperName.addValue('Kumar');
        browser.pause(timetype.short);
        txtDeveloperName.setValue('Vipin');
        browser.pause(timetype.short);
        txtDeveloperName.clearValue();
        browser.pause(timetype.short);
    })

    it('click',() =>{
        const btnPopulate = $('#populate');
        btnPopulate.click();
        browser.pause(timetype.short);
        browser.acceptAlert();
        browser.pause(timetype.short);
    })

    it('checkbox-radio button',() =>{

        const chckRadioButton = $('#remote-testing');
        const radiowindows = $('#windows');
        chckRadioButton.click();
        radiowindows.click();
        browser.pause(timetype.short);
    })

    it('selectBox', () =>{
        const selectPreference = $('#preferred-interface');
        selectPreference.selectByVisibleText('Both');
        browser.pause(timetype.short);
    })
})