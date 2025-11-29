


export function valideInput(inputName ,msg){
let text=inputName.value;
let message=document.getElementById(msg)
let regex = {
     "title-name": /^(?=.*[A-Za-z\u0600-\u06FF])[A-Za-z\u0600-\u06FF0-9\s.,!?_\-]+$/,
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
