const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);
async function getSalesProducts(){
 console.log(' Connecting to SQL....... Cloud Server');  let dbContext = await sql.connect(dbConnection);
 console.log('The Databse connection was Successful');
 console.log('Getting data');
 let results = await dbContext.request()
 .query(`
 SELECT TOP(20)
 productId,
 name,
 productNumber,
 color
 listPrice
 FROM
 salesLT.Product
 `);
 console.log(`Returned SQL results`);
 return results;
}

async function getUsersProducts(){
    console.log(' Connecting to SQL....... Cloud Server');  let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT
    CustomerID,
    NameStyle,
    Title,
    FirstName
    MiddleName
    FROM
    salesLT.Customer
    `);
    console.log(`Returned SQL results for the users.`);
    return results;
   }


   async function getUsersJoinProducts(){ 
    console.log(' Connecting to SQL....... Cloud Server');  let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');

    //limit the query to 30 results. otherwise it would be almost 40mb query
    let results = await dbContext.request()
    .query(`
    SELECT TOP(30)
    Customer.CustomerID,
    Customer.NameStyle,
    Customer.FirstName,
    CustomerAddress.ModifiedDate AS 'Address Modified Date',
    CustomerAddress.AddressType AS 'Address Type'
    FROM
    SalesLT.Customer
    INNER JOIN SalesLT.CustomerAddress ON SalesLT.Customer.CustomerID=Customer.CustomerID;
    `);
    console.log(`Returned SQL results for the users join function.`);
    return results;
   }
   
//Export all the functions
module.exports = {getSalesProducts :getSalesProducts, getUsersProducts :getUsersProducts, getUsersJoinProducts :getUsersJoinProducts};

