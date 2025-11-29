import { displayTable } from "./expenseTable.js";
import { titleName ,categoryName,amountName,dateName, expanseList, allAmount, addButton} from "./init.js";
import { valideInput } from "./regex.js";
import { sumMount } from "./sumAmount.js";
import { showToast } from "./toast.js";

export function createExpenseObj(){
  let validTitle  = valideInput(titleName, "title-msg");
let validAmount = valideInput(amountName, "amount-msg");
let validDate   = dateName.value !== "";
  if(validTitle&& validAmount&& validDate){
   addButton.setAttribute('data-bs-dismiss',"modal")
  let expens={
    title :titleName.value,
    category : categoryName.value,
    amount:amountName.value,
    date:dateName.value
}




return expens
  }
  return null

}
export function addExpense(){
const newEX=createExpenseObj()
if(newEX){
  expanseList.push(newEX)
pushData()

allAmount.push(Number(newEX.amount))
localStorage.setItem('expanse',JSON.stringify(allAmount))
sumMount()


showToast('Expense addes successfly')


}

console.log(allAmount);

}


export function clearForm(){

    titleName.value=null,
     categoryName.value=null,
    amountName.value=null,
   dateName.value=null

}

export function pushData (){


localStorage.setItem('expanseContainer',JSON.stringify(expanseList))
displayTable(expanseList)
}





