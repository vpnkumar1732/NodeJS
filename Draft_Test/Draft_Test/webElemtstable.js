describe("web Elements and tabels", () => {
    it("open the url ", () => {
        browser.url("https://webdriver.io/docs/versions.html");
        $("#past-versions").waitForExist();
        const maintableobj =$$("table");
        console.log("table count in application is " + maintableobj.length);
        let trobj = maintableobj[1].$("tbody").$$("tr");
        console.log("tr count in application is " + trobj.length);
        let tdobj = trobj[1].$$("td");
        console.log("result is "+ tdobj[3].getText());
        if(tdobj[1].$("a").getText() == "Documentation"){
            console.log("result link is " + tdobj[1].$("a").getAttribute("href"));
        }    
        browser.pause(5000);
    })

    // it("open the url ", () =>{
    //     browser.url("https://webdriver.io/docs/versions.html");
    //     $("#past-versions").waitForExist();
    //     const maintableobj =$$("table");
    //     const obj1 = $('table').$("tbody").$$('tr');
    //     const obj2 = $('table').$("thead").$$('tr');
    //     const obj3 = $('table').$$('tr');
    //     const tdBody = obj1[0].$$("td");

    //     console.log("maintableobj count is " + maintableobj.length);
        
    //     for(k =0; k <maintableobj.length; k++){
    //         let tempobj = maintableobj[k].$$('tr');
            
    //         console.log("tempobj count for k " + k + " is :" +tempobj.length );
    //         for(i =0; i <tempobj.length;i++){
    //           //  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    //           let trobj = obj3[i].$$('td');
    //            console.log(" trobjcount for i " + i + " is : " + trobj.length);
               
    //                 for(j = 0; j < trobj.length; j++){
    //             //        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    //                     console.log("for table " + i+ " tr counter "+ j + " value is :" + trobj[j].getText());
    //                 }
    //         }
    //     }
    // //     console.log("body Tr count is " + obj1.length);
    // //     console.log("head Tr count is " + obj2.length);
    // //     console.log("all Tr undertabel is " + obj3.length);
    // //     console.log("td under body " + (tdBody).length)
    // //     for(i =0;i < tdBody.length;i++){
    // //         console.log(i + " value is :" + tdBody[i].getText())
    // //     }
    // //  //   console.log("td value for body is v5 " + tdBody[0].getText());
    // //     console.log("td under head " + (obj2[0].$$("td")).length)



    // })
 
})