'use strict';
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove todos os caracteres não numéricos

    if (cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999") {
        
        return false;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function applyCPFValidation(dependentElement) {
    const cpfInputs = document.querySelectorAll('.form-control.cpf');

    cpfInputs.forEach(cpfInput => {
        cpfInput.addEventListener('input', () => {
            const cpf = cpfInput.value;
            if (validarCPF(cpf)) {
                cpfInput.classList.remove('is-invalid');
                cpfInput.classList.add('is-valid');
                cpfInput.setCustomValidity("");
            } else {
                cpfInput.classList.remove('is-valid');
                cpfInput.classList.add('is-invalid');
                cpfInput.setCustomValidity("CPF inválido");
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyCPFValidation(document);
});

export { applyCPFValidation };
