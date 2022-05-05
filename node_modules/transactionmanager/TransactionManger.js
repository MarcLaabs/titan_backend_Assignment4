class Transactions {
  constructor(id, date, description, amount, type){
    this.id = id;
    this.date = date;
    this.description = description;
    this.amount = amount;
    this.type = type;
  }
}

var transactions = [];

function getTransactions(){
  return transactions;
}

function saveTransaction(transaction){
  var newId = Math.floor(Math.random() * 100000);
  var newTx = new Transactions(newId, transaction.date, transaction.description, transaction.amount, transaction.type);
  transactions.push(newTx);
};

function deleteTransactionById(id){
  var requiredIndex = transactions.findIndex(el => {
    return el.id == String(id);
  });

  if(requiredIndex === -1) {
    return false;
  };
  return !!transactions.splice(requiredIndex, 1);
};

//module.exports = getTransactions, saveTransaction, deleteTransaction;
exports.getTransactions = getTransactions;
exports.saveTransaction = saveTransaction;
exports.deleteTransaction = deleteTransactionById;
