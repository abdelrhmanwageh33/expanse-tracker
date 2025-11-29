import { displayTable } from "./expenseTable.js"
export let idName =document.getElementById('id-name')
export let searchInput=document.querySelector('.search')
export let titleName = document.getElementById('title-name')
export let amountName = document.getElementById('amount-name')
export let categoryName = document.getElementById('category-name')
export let dateName= document.getElementById('date-name')
export let addButton=document.getElementById('addButton')
export let updateButton=document.getElementById('updateButton')
export let expenseBody=document.getElementById('expense-body')
export let expanseList=[]
export let expenseAmount=document.querySelector('.expenseAmount')
export let allAmount=[]
export let incomeInput = document.querySelector('.incomeInput')
export let totalIncome=document.querySelector('.totalIncome')
export let sumIncome=document.querySelector('.sumIncome')
export let totalIncomInput = JSON.parse(localStorage.getItem('totalIncomeList')) || [];

export let total = totalIncomInput.reduce((acc, arr) => acc + Number(arr), 0);
export let cash = document.querySelector('.cashOnHand')
export let updateExpanse=document.getElementById('updateExpanse')

export let categoryFilter = document.getElementById('categoryFilter')
export let addExpanseBtn=document.querySelector('.addExpanseBtn')
export let updateExpanseBtn=document.querySelector('.updateExpanseBtn')
export let deleteIncome= document.getElementById('deleteTotalIncome')

if(localStorage.getItem('expanseContainer')!==null){
    expanseList=JSON.parse(localStorage.getItem('expanseContainer'))
    displayTable(expanseList)
}

if(localStorage.getItem('expanse')!==null){
    allAmount=JSON.parse(localStorage.getItem('expanse'))
    
}



