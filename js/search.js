import { displayTable } from "./expenseTable.js";
import { expanseList } from "./init.js";

export function searchAndFilter (ele,x){
if(ele.value===''){
    displayTable(expanseList)
    return;
}

let eleValue=ele.value

let eleList= expanseList.filter((item)=>{
     
   return item[x] === eleValue

})
displayTable(eleList)
}