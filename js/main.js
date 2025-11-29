import {addButton, cash, categoryFilter, searchInput, sumIncome, total, updateExpanseBtn } from "./init.js";

import { addExpense, clearForm } from "./expenseObj.js";
import { updateExpanse } from "./updateData.js";
import {    displaytotalIncome } from "./totalIncom.js";
import { sumAmount } from "./sumAmount.js";
import { searchAndFilter } from "./search.js";

 

addButton.addEventListener('click',function(){
    addExpense()
    clearForm()
 cash.innerHTML=total-sumAmount


})
updateButton.addEventListener('click',function(){
    updateExpanse()
   cash.innerHTML=total-sumAmount
})


categoryFilter.addEventListener('change',function(){

searchAndFilter(categoryFilter,'category')
    
})

searchInput.addEventListener('keyup',function(){

searchAndFilter(searchInput,'title')
})

