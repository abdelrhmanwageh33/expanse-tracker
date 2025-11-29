export function showToast(message, type = "success") {
  const toastEl = document.getElementById('action-toast');
  const toastMsg = document.getElementById('toast-message');

  
  toastMsg.textContent = message;

  
  toastEl.classList.remove('text-bg-success', 'text-bg-danger', 'text-bg-warning');


  if(type === "success") toastEl.classList.add('text-bg-success');
  else if(type === "error") toastEl.classList.add('text-bg-danger');
  else if(type === "warning") toastEl.classList.add('text-bg-warning');

 
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();
}
