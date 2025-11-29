


export function valideInput(inputName ,msg){
let text=inputName.value;
let message=document.getElementById(msg)
let regex = {
     "title-name": /^(?=.*[\p{Script=Arabic}\p{Latin}\p{Nd}])[\p{Script=Arabic}\p{Latin}\p{Nd}\p{P}\s]+$/u,
  "amount-name": /^[1-9]\d*$/


}
if(regex[inputName.id].test(text)){
   
        message.classList.add('d-none')
        return true

}
else{
   
    message.classList.remove('d-none')
return false
}
}

window.valideInput = valideInput;
