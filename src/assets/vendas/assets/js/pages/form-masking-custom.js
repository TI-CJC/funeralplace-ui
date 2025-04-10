'use strict';
function applyMasksAndValidation(dependentElement) {

  const cpfInputs = document.querySelectorAll('.form-control.cpf');
  const dateInputs = document.querySelectorAll('.form-control.date');
  const celularInputs = document.querySelectorAll('.form-control.celular');
  const cepInputs = document.querySelectorAll('.form-control.cep');

  cpfInputs.forEach(function(cpfInput) {
    IMask(cpfInput, { mask: '000.000.000-00' });
});


  
celularInputs.forEach(function(celularInput) {
  IMask(celularInput, {
    mask: [
      '(00)0000-0000', // para números fixos
      '(00)00000-0000' // para números de celular
    ]
  });
});

  cepInputs.forEach(function(cepInput) {
  IMask(cepInput, { mask: '00000-000' });
});
}
document.addEventListener('DOMContentLoaded', () => {
  applyMasksAndValidation(document);
});
export { applyMasksAndValidation };