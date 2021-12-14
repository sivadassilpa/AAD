const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    // options: {
    //   userName: "CibusCellBDAdmin", // update me
    //   password: "CibusCell2020" // update me
    // },
    // type: "default"
    type: 'azure-active-directory-access-token',
    options: {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1ZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMGFhOWQtN2EzZDcyMzYyYzMwLyIsImlhdCI6MTYzOTM3NzY5NiwibmJiOjE2MzkzODE1OTYsImFpbyI6IkUyWmdZQkNiVUtTVmR6amliYXBwaWQiOiI4ZjJiYjlkNy1lYmRhLTQwNDgtOGI0NC05ZmUjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5jNWItOTU4OS03YTNkNzIzNjJjMzAvIiwib2lkIjoiOWEzZGQtYTJhNjlkYTk4MWVhIiwicmgiOiIwLkFYa0EwZFNwQ2wxVlc95Say8CbA3UtGrvo7e8kgMac6H5YXvNWfLoVEwKNaVhxMRxP5_TfUXLXGtdMUJ9SdKLEdqw_dX-lpbtVFGvHPF8OK1qsGu4vfxyRoKPF02Kn7t0YtpYQ6k2qeKQThjWG-Ke6yW0116rfAS0H3BDtZeXmk8V30aZJKfdAV3npH-ouOR86XJnbKA'
    }
  },
  server: "cibuscelldbserver.database.windows.net", // update me
  options: {
    database: "CibusCellBDSQL", //update me
    encrypt: true
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
  const request = new Request(
    `SELECT TOP 20 pc.Name as CategoryName,
                   p.name as ProductName
     FROM [SalesLT].[ProductCategory] pc
     JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}