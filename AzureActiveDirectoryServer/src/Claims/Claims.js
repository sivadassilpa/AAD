// Import the mssql package
var _ = require("lodash");
var sql = require("mssql");
// var config = require("../../config.js");
var { Connection, Request } = require("tedious");


// let clientSecret = "R4M7Q~nUltkPmqyv4UTiOKCUQJ6Kk8ptsdYCp";
// let serverName = "cibuscelldbserver.database.windows.net";
// let databaseName = "CibusCellBDSQL";
// let clientId = "8f2bb9d7-ebda-4048-8b44-9fe1a3699f09";
// let tenantId = "0aa9d4d1-555d-4c5b-9589-7a3d72362c30";

let token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjE4aklkXzF3dC1OZjBrdkpiS0lvTThidDJVdDJDTnpmY1NxTHM2SFg3TWsiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wYWE5ZDRkMS01NTVkLTRjNWItOTU4OS03YTNkNzIzNjJjMzAvIiwiaWF0IjoxNjM3OTk2MDc0LCJuYmYiOjE2Mzc5OTYwNzQsImV4cCI6MTYzODAwMDM1MiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQTlIWlE2N2sxdCsvUW9ScHRNVHFWdkJBNXQrZ283VXZaN0NRbG4xU3F6dFpLNUV0bkpKeFNOWTlEMGE0TjdXbGJvNngvUlNoNEhzejV3TXJqSStPMy9nPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkNpYnVzQ2VsbEFBRCBTZXJ2ZXIiLCJhcHBpZCI6IjhmMmJiOWQ3LWViZGEtNDA0OC04YjQ0LTlmZTFhMzY5OWYwOSIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiU2l2YWRhcyIsImdpdmVuX25hbWUiOiJTaWxwYSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjEwMy43MC4xOTkuMTgxIiwibmFtZSI6IlNpbHBhIFNpdmFkYXMiLCJvaWQiOiIzNWFlMDYwNy02MTY0LTQ2ZWItODcyZi03NDRhMDAzMWI5ZmIiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDE1MzAwNUNFNiIsInJoIjoiMC5BWGtBMGRTcENsMVZXMHlWaVhvOWNqWXNNTmU1SzRfYTYwaEFpMFNmNGFOcG53bDVBS0UuIiwic2NwIjoib3BlbmlkIHByb2ZpbGUgVXNlci5SZWFkIGVtYWlsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiUlQ4UHRaSlgycUUyR1lJLVZXbkpNWmI4NmNGVmh6eTdyZXdtR1JtQnljWSIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJFVSIsInRpZCI6IjBhYTlkNGQxLTU1NWQtNGM1Yi05NTg5LTdhM2Q3MjM2MmMzMCIsInVuaXF1ZV9uYW1lIjoic2lscGEuc2l2YWRhc0BjaWJ1c2NlbGwuY29tIiwidXBuIjoic2lscGEuc2l2YWRhc0BjaWJ1c2NlbGwuY29tIiwidXRpIjoiX2VNUndjN180MGFUZW84ZEtBaFJBUSIsInZlciI6IjEuMCIsIndpZHMiOlsiZjI4YTFmNTAtZjZlNy00NTcxLTgxOGItNmExMmYyYWY2YjZjIiwiNjkwOTEyNDYtMjBlOC00YTU2LWFhNGQtMDY2MDc1YjJhN2E4IiwiMTE2NDg1OTctOTI2Yy00Y2YzLTljMzYtYmNlYmIwYmE4ZGNjIiwiYTllYTg5OTYtMTIyZi00Yzc0LTk1MjAtOGVkY2QxOTI4MjZjIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJ6ZElhYWthZ1plV2MtMUYzQ0dpQ1dBUll0UmNlamE5NzcyUE1aclc1SEpnIn0sInhtc190Y2R0IjoxNjA4ODEwNjYwfQ.Qd5uD9dTapl_pBRcj65GjLf4XlrCgr6D_Ixs8XrCu008HjZh1yN0h7rvKJaasNcbmG7JuMJCpsqvhd6ssITH9Z73zyUyuayAdm_uuiDqUi4d-0YLB4QrJMQ_BIYQnIOom7HyE9Vqd2R675qN_UvU34kh4Y5VJ8-hOZbrocHu5Hod_iSlTqQATVcjf-rY6SCejDfEUIfczSdEu6GSA4WHD_puzgn-yOLqiC3ng0wOSBGvyC64ph7B_k7jXIht95lcmIgx6ygP9z3NozXRCndkWGWLFVmtUFazHMcqZHVmm2GLye-7GMDlibAH8LmebrKJyeuBguorWma6Ai0uwS1jzQ'
const config = {
  server: "cibuscelldbserver.database.windows.net",
  type: "azure-active-directory-password",
        options: {
            userName: "CibusCellBDAdmin",
            password: "CibusCell2020",
            },
  // authentication: {
  //     type: 'azure-active-directory-access-token',
  //     options:{
  //         token
  //     }
  // },
  options: {
      database: 'CibusCellBDSQL',
      encrypt: true,
      port: 1433,
      token,
  }
};



const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
if (err) {
  console.error(err.message);
} else {
  queryDatabase();
}
});

connection.connect();

function queryDatabase() {
console.log("Reading rows from the Table...");

// Read all rows from table

}



// var msrestAzure = require("ms-rest-azure");


// let clientSecret = "R4M7Q~nUltkPmqyv4UTiOKCUQJ6Kk8ptsdYCp";
// let serverName = "cibuscelldbserver.database.windows.net";
// let databaseName = "CibusCellBDSQL";
// let clientId = "8f2bb9d7-ebda-4048-8b44-9fe1a3699f09";
// let tenantId = "0aa9d4d1-555d-4c5b-9589-7a3d72362c30";

// var dbConfig = {
//   config,

//   options: {
//     encrypt: true,
//     enableArithAbort: true,
//   },
// };


// let databaseCredentials = await msrestAzure.loginWithServicePrincipalSecret(
//   clientId,
//   clientSecret,
//   tenantId,
//   {
//     tokenAudience: "https://database.windows.net/",
//   },
// );

// // getting access token
// let databaseAccessToken = await new Promise((resolve, reject) => {
//   databaseCredentials.getToken((err, results) => {
//     if (err) return reject(err);
//     resolve(results.accessToken);
//   });
// });
// var config = {
//   server: serverName,
//   authentication: {
//     type: "azure-active-directory-access-token",
//     options: {
//       token: databaseAccessToken,
//     },
//   },
//   options: {
//     debug: {
//       packet: true,
//       data: true,
//       payload: true,
//       token: false,
//       log: true,
//     },
//     database: databaseName,
//     encrypt: true,
//   },
// };

// var connection = new Connection(config);
// connection.connect();
// connection.on("connect", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   executeStatement(connection);
// });

// connection.on("debug", function (text) {
//   console.log(text);
// });

function getClaims(companyId) {
  // Create connection instance
  var conn = new sql.ConnectionPool(config);

  ret = conn
    .connect()
    // Successfull connection
    .then(function () {
      // Create request instance, passing in connection instance
      var req = new sql.Request(conn);
      req.input("compId", sql.VarChar, companyId);
      // Call mssql's query method passing in params
      const nfun2 = req
        .query(
          "SELECT Description, LocationID, LastModified, Priority FROM dbo.Claims where companyid=@CompId order by claimid desc"
        )
        .then(function (recordset) {
          //  console.log(recordset);

          var headers = Object.keys(recordset["recordset"][0]);

          var innerarr = new Array();
          innerarr.push(headers);
          for (var j = 0; j < recordset.recordset.length; ++j) {
            let val = Object.values(recordset["recordset"][j]);
            innerarr.push(val);
          }
          conn.close();
          return innerarr;
        })
        // Handle sql statement execution errors
        .catch(function (err) {
          console.log(err);
          conn.close();
        });
      return nfun2;
    })
    // Handle connection errors
    .catch(function (err) {
      console.log(err);
      conn.close();
    });

  return ret;
}

s = getClaims("DHBW");
s.then(function (result) {
  console.log(result);
});

module.exports = { getClaims };
