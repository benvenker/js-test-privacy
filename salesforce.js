const jforce = require('jforce');

const username = "jdoe23";
const password = "12345678";
const securityToken = "1234567890";

const conn = new jforce.Connection({
    oauth2: {
        loginUrl: "https://login.salesforce.com",
    }});

conn.login(username, password, securityToken, function(err, userInfo) {
    if (err) { return console.error(err); }
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);

    const record = {
        LasName: "Smith",
        Email: "email@example.com",
        Company: "Acme",
    };
    
    conn.sobject("Contact").create(record, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
    });
});