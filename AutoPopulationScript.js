// JavaScript source code
function AutoPopulationNew(executionContext) {
    var formContext = executionContext.getFormContext();
    var agentId = formContext.getAttribute("cts_agentid").getValue();
    Xrm.WebApi.online.retrieveMultipleRecords("cts_agent", "?$select=cts_email,cts_fax,cts_mobilenumber,cts_name,cts_phonenumber&$filter=cts_agentnumber eq " + agentId + "").then(
        function success(results) {
            var cts_email,cts_fax,cts_mobilenumber,cts_name,cts_phonenumber;
            for (var i = 0; i < results.entities.length; i++) {
                if (results.entities.length > 0) {
                    cts_email = results.entities[i]["cts_email"];
                    cts_fax = results.entities[i]["cts_fax"];
                    cts_mobilenumber = results.entities[i]["cts_mobilenumber"];
                    cts_name = results.entities[i]["cts_name"];
                    cts_phonenumber = results.entities[i]["cts_phonenumber"];
                }
                else {
                    console.log("no value ");
                }
            }
            
            formContext.getAttribute("cts_name").setValue(cts_name);
            formContext.getAttribute("cts_mobilenumber").setValue(cts_mobilenumber);
            formContext.getAttribute("cts_phonenumber").setValue(cts_phonenumber);
            formContext.getAttribute("cts_fax").setValue(cts_fax);
            formContext.getAttribute("cts_email").setValue(cts_email);
        },
        function (error) {
            Xrm.Utility.alertDialog(error.message);
        }
    );

   
}