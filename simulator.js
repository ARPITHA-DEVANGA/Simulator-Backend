const simulator = require('ocppsimulatorexample');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const reading_cp = require('./cp.json');

function startcp(){
    var cp = new simulator.ChargePointSimulator(reading_cp.url,reading_cp.identifier, reading_cp.protocol, reading_cp.TRANSPORT_LAYER,{
        fromHeader: reading_cp.fromHeader,
        remoteActionPort: reading_cp.remoteActionPort
      });

    simulator.chargePoints[cp.chargePointId] = cp;
    var value = simulator.chargePoints[cp.chargePointId];
    return value;
};

startcp();


function authorizeRequest(){
  var values = {};
  var cpId = -1;
  var requestMessage = simulator.commandCPtoCS(cpId, "Authorize", values);
}

setTimeout(authorizeRequest,10000);

// function getResponse(){
//   const fs = require('fs') 
  
//   fs.readFile('connection.txt', 'utf-8',(err, data) => { 
//     if (err) throw err; 
  
    
// });
// }


// function getResponse(){
//   // var a = new Simulators.CentralSystemSimulator(port,Transport.TRANSPORT_LAYER);
//   // console.log("a.......",a);


//   // var serverConnection = new simulator.SRPCServerConnection(connectionWrapper,
//   //   this.transportLayer.simulator.chargePointId);
// }


// setTimeout(authorizeRequest,10000);
// setTimeout(getResponse,10000);

app.post('/authorize',(req,res) => {
  
  res.status(200).send("Authorized Successfully");
});


//setTimeout(authorize,10000);
// // // function authorize(procName){
// // //   var values = typeof args == 'string' ? args : simulator.getRequestValues(procName, args);
// // //   console.log(".............",values);
// // // };

 //authorize();
//authorize(Authorize);



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

//app.listen(3000);
