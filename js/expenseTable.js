import { deleteItem } from "./deleteItem.js";
import {  expenseBody,searchInput } from "./init.js";
import { updateItem } from "./updateData.js";






export function displayTable(expanseList){

  let kelma= searchInput
    let cartona=''

expanseList.map((item,index)=>{

  cartona+=
`  
    <tr>
      
<td style="padding:10px; border-bottom:1px solid #f1f5f9;">${index+1}</td>
      <td style="padding:10px; border-bottom:1px solid #f1f5f9;">${item.title}</td>
      <td style="padding:10px; border-bottom:1px solid #f1f5f9;">${item.amount}</td>
      <td style="padding:10px; border-bottom:1px solid #f1f5f9;">${item.category}</td>
      <td style="padding:10px; border-bottom:1px solid #f1f5f9;">${item.date}</td>
      <th>
<i class="fa-solid fa-trash text-danger" id="deleteItem" onclick=deleteItem(${index})></i> 
         <i class="fa-regular fa-pen-to-square text-warning"   data-bs-toggle="modal" data-bs-target="#expenseModal" data-bs-whatever="@getbootstrap" onclick=updateItem(${index})></i> 
    </th>
         </tr>
`
})
expenseBody.innerHTML=cartona
}

window.deleteItem=deleteItem
window.updateItem=updateItem



