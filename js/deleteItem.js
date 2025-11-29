import { pushData } from "./expenseObj.js"
import { allAmount, cash, expanseList, total } from "./init.js"
import {   sumAmount, sumMount } from "./sumAmount.js"
import { showToast } from "./toast.js"


export function deleteItem(index){
expanseList.splice(index,1)    
pushData()
allAmount.splice(index,1)
localStorage.setItem('expanse',JSON.stringify(allAmount))
sumMount()
cash.innerHTML=total-sumAmount
showToast('Expense deleted successfully!','error')
}
