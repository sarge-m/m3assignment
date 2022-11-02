const db = require('../config/db.manager');
exports.getAllUsers = function (req, res) {
 const usersProduct = db.getUsersProducts().then(results=>{  console.log(results);
 res.status(200).json({
 status: 'successfull',
 data: results.recordsets[0]
 }); // send all the data
 });

}

exports.getUsersByID = function( req, res){
    const usersJoinProduct = db.getUsersJoinProducts().then(results2=>{  console.log(results2);
    res.status(200).json({
    status: 'The SQl query tha joins data by linking two related IDs is present below:',
    data: results2.recordsets[0]
    });
    });
   }