/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const amount=new Map();

  for(let transaction of transactions){
    if(amount.has(transaction.category)===false)amount.set(transaction.category,transaction.price);
    else amount.set(transaction.category,amount.get(transaction.category)+transaction.price);
    amount.entries();
  }

  const result=[];
  for(let [key,value] of amount){
    let transaction={
        category:key,
        totalSpent:value
    };
    result.push(transaction);
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
