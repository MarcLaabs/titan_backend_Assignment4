const express = require("express");
const app = express();
const transactionManager = require("transactionManager");
var router = express.Router();

app.use(
  express.urlencoded({
    extended:true
  })
);

app.use(express.json());
app.use(require('body-parser').json());

router.get("/transactions", (req,res)=> {
  var transactionList = JSON.stringify(transactionManager.getTransactions());
  console.log(transactionList);
  res.send("This is the page for items.");
});

router.post("/transactions/", (req, res)=> {
  console.log("I am in the post route");
  console.log(req.body);

  transactionManager.saveTransaction(req.body);

  res.send("This page is to post.");
  res.end();
});

router.delete("/products/:transaction_Id", (req, res)=> {
  var inId = req.params.transactionId;
  var transactionList = transactionManager.deleteTransaction(inId);
  res.send("This page is to delete.");
});

module.exports = router;
