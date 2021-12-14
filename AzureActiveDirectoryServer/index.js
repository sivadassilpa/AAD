const express = require("express");
const msal = require('@azure/msal-node');

const SERVER_PORT = process.env.PORT || 3000;
const REDIRECT_URI = "http://localhost:3000/redirect";

var { Connection, Request } = require("tedious");

const config = {
  auth: {
    clientId: "8f2bb9d7-ebda-4048-8b44-9fe1a3699f09",
    authority: "https://login.microsoftonline.com/cibuscell.com",
    clientSecret: "R4M7Q~nUltkPmqyv4UTiOKCUQJ6Kk8ptsdYCp"
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    }
  }
};

// Create msal application object
const pca = new msal.ConfidentialClientApplication(config);

// Create Express App and Routes
const app = express();

app.get('/', (req, res) => {
  const authCodeUrlParameters = {
    scopes: ["user.read"],
    redirectUri: REDIRECT_URI,
  };



  // get url to sign user in and consent to scopes needed for application
  pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
    res.redirect(response);
  }).catch((error) => console.log(JSON.stringify(error)));


  const tokenRequest = {
    scopes: ['https://analysis.windows.net/powerbi/api/.default'],
  };

  pca.acquireTokenByClientCredential(tokenRequest).then((response) => {
    console.log("Response is ::: ", response);
  });
});

app.get('/redirect', (req, res) => {
  const tokenRequest = {
    scopes: ['https://analysis.windows.net/powerbi/api/.default'],
  };

  pca.acquireTokenByClientCredential(tokenRequest).then((response) => {
    console.log("Response is ::: ", response);
    // pca.acquireTokenByCode(tokenRequest).then((response) => {
    console.log("\nResponse: \n:", response);
    let token = response.accessToken;
    const config = {
      server: "cibuscelldbserver.database.windows.net",
      authentication: {
        options: {
          userName: "CibusCellBDAdmin", // update me
          password: "CibusCell2020" // update me
        },
        type: "default",
        // type: 'azure-active-directory-access-token',
        // options: {
        //   token
        // }
      },
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
    res.sendStatus(200);
  }).catch((error) => {
    console.log(error);
    res.status(500).send(error);
  });



});


app.listen(SERVER_PORT, () => console.log(`Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`))
