sap.ui.define([
    "sap/ui/integration/Extension"
], 
    function (Extension) {
        "use strict";
        var CardExtension = Extension.extend("ns.ui_table_card_contacts.ext.FormatterExtension");
        
        CardExtension.prototype.getData = function (arg) {
            /* console.log('hello');
            var oCard = this.getCard();
            return oCard.request({
                "url" : "{{destinations.ES5}}/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet",
            }).then(function(oData){
                

                return oData;
            }) */
            let oCard = this.getCard();
            let dataPromise = new Promise(function(resolve,reject){
                oCard.request({
                    "url" : "{{destinations.sapes5}}/sap/opu/odata/iwbep/GWSAMPLE_BASIC/ContactSet",
                    "withCredentials" : true
                }).then(function(oData){
                    console.log(oData);
                });

                resolve({
                    d: {
                        results : [
                            {
                                "FirstName" : "Sam",
                                "LastName" : "Jones",
                                "EmailAddress" : "sjones@gmail.com"
                            }
                        ]
                    }
                });

            })

            return dataPromise;

            return Promise.resolve({
                d: {
                    results : [
                        {
                            "FirstName" : "Sam",
                            "LastName" : "Jones",
                            "EmailAddress" : "sjones@gmail.com"
                        }
                    ]
                }
            })
        };


    
        return CardExtension;
    }
); 