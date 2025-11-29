import { addExpanseBtn, cash, categoryFilter, deleteIncome, incomeInput, sumIncome, total, totalIncome, totalIncomInput, updateExpanse, updateExpanseBtn } from "./init.js";
import { sumAmount } from "./sumAmount.js";



totalIncome.innerHTML = total;

export function displaytotalIncome() {
    totalIncomInput.push(incomeInput.value);
    let total = totalIncomInput.reduce((acc, arr) => acc + Number(arr), 0);
    localStorage.setItem('totalIncomeList', JSON.stringify(totalIncomInput));

    totalIncome.innerHTML = total;

  cash.innerHTML=total-sumAmount

 
}

sumIncome.addEventListener('click',function(){
    displaytotalIncome()
    
})
updateExpanse.addEventListener('click',function(){
  incomeInput.value=totalIncomInput.at(-1) 
  totalIncomInput.pop()
  updateExpanseBtn.classList.remove('d-none')
  addExpanseBtn.classList.add('d-none')
  localStorage.setItem('totalIncomeList', JSON.stringify(totalIncomInput));


})

updateExpanseBtn.addEventListener('click',function(){
    displaytotalIncome()
    
})
deleteIncome.addEventListener('click',function(){
  totalIncomInput.splice(0,totalIncomInput.length)
      let total = totalIncomInput.reduce((acc, arr) => acc + Number(arr), 0);
    localStorage.setItem('totalIncomeList', JSON.stringify(totalIncomInput));

    totalIncome.innerHTML = total;

  cash.innerHTML=total-sumAmount

    

})

cash.innerHTML=total-sumAmount

