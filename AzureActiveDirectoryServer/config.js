var config = {
  server: 'cibuscelldbserver.database.windows.net',
  authentication: {
    type: 'azure-active-directory-access-token',
    options: {
      token: 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjRNdHhzQklMX1RQc1k3Vk9kSEVfRHp4cnMxdUo2eTl5M2RvRnZ5QlhQbEkiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wYWE5ZDRkMS01NTVkLTRjNWItOTU4OS03YTNkNzIzNjJjMzAvIiwiaWF0IjoxNjM3OTg5NDI5LCJuYmYiOjE2Mzc5ODk0MjksImV4cCI6MTYzNzk5Mzg0MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQThMZXU0a1NzWUJ3c2RtYmJvWmgrT0l3cDdRcGFxcXhhWFVOR1RYTERpa3dGQTlSWVhweGZoeU5tcEdDMnFTYjFNdTE1M0Z2dldibjYvWlExOEVMYmNBPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkNpYnVzQ2VsbEFBRCBTZXJ2ZXIiLCJhcHBpZCI6IjhmMmJiOWQ3LWViZGEtNDA0OC04YjQ0LTlmZTFhMzY5OWYwOSIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiU2l2YWRhcyIsImdpdmVuX25hbWUiOiJTaWxwYSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjI3Ljk3LjIyMS4xNzIiLCJuYW1lIjoiU2lscGEgU2l2YWRhcyIsIm9pZCI6IjM1YWUwNjA3LTYxNjQtNDZlYi04NzJmLTc0NGEwMDMxYjlmYiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMTUzMDA1Q0U2IiwicmgiOiIwLkFYa0EwZFNwQ2wxVlcweVZpWG85Y2pZc01OZTVLNF9hNjBoQWkwU2Y0YU5wbndsNUFLRS4iLCJzY3AiOiJvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJSVDhQdFpKWDJxRTJHWUktVlduSk1aYjg2Y0ZWaHp5N3Jld21HUm1CeWNZIiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkVVIiwidGlkIjoiMGFhOWQ0ZDEtNTU1ZC00YzViLTk1ODktN2EzZDcyMzYyYzMwIiwidW5pcXVlX25hbWUiOiJzaWxwYS5zaXZhZGFzQGNpYnVzY2VsbC5jb20iLCJ1cG4iOiJzaWxwYS5zaXZhZGFzQGNpYnVzY2VsbC5jb20iLCJ1dGkiOiJQTzJoUzVlOGEwdWFtNU1HZGxSa0FRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJmMjhhMWY1MC1mNmU3LTQ1NzEtODE4Yi02YTEyZjJhZjZiNmMiLCI2OTA5MTI0Ni0yMGU4LTRhNTYtYWE0ZC0wNjYwNzViMmE3YTgiLCIxMTY0ODU5Ny05MjZjLTRjZjMtOWMzNi1iY2ViYjBiYThkY2MiLCJhOWVhODk5Ni0xMjJmLTRjNzQtOTUyMC04ZWRjZDE5MjgyNmMiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3N0Ijp7InN1YiI6InpkSWFha2FnWmVXYy0xRjNDR2lDV0FSWXRSY2VqYTk3NzJQTVpyVzVISmcifSwieG1zX3RjZHQiOjE2MDg4MTA2NjB9.FPoLqiksR_-ETAu_L2ZNb4ag6KK-ejZWfctSKJioY_2XzpExVqLTfe_ivaz2KHVI7T4hRQno9-308vmnE9Y5_nw816fJV11mNyImne85ZJXAbDSRvINRMrYMlVpT2aBrdWs94b6fyW1NfdseUHwwPhwynl7pZAxENEcfyhRUXIcRo3BFoPi5ra48rKfluMpyGWakLFZlJ96_gNPmQaCuDrbuUvVrWC6bw9B987jPKBqXGbH60Yn9Hx5pTCgyWyKICUadPjeE6kmltQ'
    }
  },
  database :'CibusCellBDSQL',
  options: {
    debug: {
      packet: true,
      data: true,
      payload: true,
      token: false,
      log: true
    },
    encrypt: true
  }
};

// config.server = "cibuscelldbserver.database.windows.net";
// config.database = "CibusCellBDSQL";

// config.user = "CibusCellBDAdmin"; //|| process.env.USER
// config.password = "CibusCell2020"; //||process.env.PASSWORD
// config.port = 1433;
// config.options = {
//   encrypt: true,
//   enableArithAbort: true,
// };
// config.authentication = 

// config.requestTimeout= 180000;
module.exports = config;


// server: serverName,
//   authentication: {
//   type: 'azure-active-directory-access-token',
//     options: {
//     token: accessToken
//   }
// }
//             , options: {
//   debug: {
//     packet: true,
//       data: true,
//         payload: true,
//           token: false,
//             log: true
//   },
//   database: databaseName,
//     encrypt: true
// }
