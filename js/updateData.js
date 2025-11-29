import { createExpenseObj, pushData } from "./expenseObj.js";
import { titleName  , categoryName,amountName,dateName, expanseList, addButton, updateButton, allAmount} from "./init.js";
import { sumMount } from "./sumAmount.js";
import { showToast } from "./toast.js";
let currentIndex=0
export function updateItem(i){
    currentIndex=i
        titleName.value=expanseList[i].title,
         categoryName.value=expanseList[i].category,
        amountName.value=expanseList[i].amount,
       dateName.value=expanseList[i].date
       addButton.classList.add('d-none')
       updateButton.classList.remove('d-none')
       allAmount.splice(currentIndex,1)
       localStorage.setItem('expanse',JSON.stringify(allAmount))
}

export function updateExpanse(){
const newEX=createExpenseObj()
expanseList.splice(currentIndex,1,newEX)
pushData()

allAmount.push(Number(newEX.amount))
localStorage.setItem('expanse',JSON.stringify(allAmount))
sumMount()
 addButton.classList.remove('d-none')
       updateButton.classList.add('d-none')
       showToast('Expense updated successfully!','warning')
}





