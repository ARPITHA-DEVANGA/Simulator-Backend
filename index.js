// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// // app.post('/authorize',(req,res)=>{
// //  res.send()
// // });

// const connectorId = [0,1,2];
    
// app.get('/starttransaction/:connectorId',(req,res)=>{
//     //res.send(req.params.connectorId);
//     const id = connectorId.find(x => x.connectorId === parseInt(req.params.connectorId));
//     if(!id) res.status(404).send('Not Available');
//     res.send(id);
// });

// //function to fetch tranactionid
// getTransactionId : function(transactionId){
//           if(procName.transactionId) { 
//           OCPP.transactionids = procName.transactionId; 
//           console.log("Printing the transactionId.........",OCPP.transactionids);
//           return OCPP.transactionids;
//         }
// }

// app.get('/stoptransaction/:transactionId',(req,res)=>{
//     res.send(req.params.transactionId);
// });
  
          
// app.listen(3000);