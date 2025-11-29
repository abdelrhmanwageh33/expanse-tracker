import { allAmount, expenseAmount } from "./init.js";


export let sumAmount = Number(localStorage.getItem('sumAmount')) || 0;

// تحديث المجموع وحفظه
export function sumMount() {
    sumAmount = allAmount.reduce((acc, curr) => acc + curr, 0);

    expenseAmount.innerHTML = sumAmount;          
    localStorage.setItem('sumAmount', sumAmount);
    

}

window.addEventListener('DOMContentLoaded', () => {
    expenseAmount.innerHTML = sumAmount;
});
