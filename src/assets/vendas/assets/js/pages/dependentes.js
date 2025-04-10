'use strict';
import { applyMasksAndValidation } from './form-masking-custom.js';
import { applyCPFValidation } from './validacpf.js';

document.addEventListener('DOMContentLoaded', () => {
    let dependentCount = 0;
    const dependentsContainer = document.getElementById('dependentsContainer');
    const dependentTemplate = document.getElementById('dependentTemplate').content;
    const addDependentBtn = document.getElementById('addDependentBtn');
    const removeDependentBtn = document.getElementById('removeDependentBtn');

    // Adiciona um novo dependente
    addDependentBtn.addEventListener('click', () => {
        dependentCount++;
        const newDependentFragment = dependentTemplate.cloneNode(true);
        const newDependent = newDependentFragment.querySelector('.dependent-entry'); // Seleciona o elemento real
        updateDependentFields(newDependent, dependentCount);
        dependentsContainer.appendChild(newDependentFragment); // Adiciona o fragmento inteiro ao container
        applyMasksAndValidation(newDependent); // Aplica as máscaras e validações ao novo dependente
        applyCPFValidation(newDependent); // Aplica a validação de CPF ao novo dependente
    });

    // Remove o último dependente adicionado
    removeDependentBtn.addEventListener('click', () => {
        if (dependentCount > 0) {
            dependentsContainer.removeChild(dependentsContainer.lastElementChild);
            dependentCount--;
            updateDependentHeaders();
        }
    });

    // Atualiza os campos do dependente conforme o índice
    function updateDependentFields(dependentElement, index) {
        const header = dependentElement.querySelector('.dependent-header');
        if (header) {
            header.textContent = `Dependente ${index}`;
        }

        // Atualiza o atributo dependente-id para identificar o dependente
        dependentElement.setAttribute('dependente-id', index);

        const inputs = dependentElement.querySelectorAll('input, select');
        inputs.forEach(input => {
            // Define um atributo dependente-id para os inputs se necessário
            input.setAttribute('dependente-id', index);

            // Incrementa o name do input com "_" + o número da sequência
            const originalName = input.getAttribute('name');
            if (originalName) {
                input.setAttribute('name', `${originalName}_${index}`);
            }
        });
    }

    // Atualiza os cabeçalhos e nomes dos dependentes quando um é removido
    function updateDependentHeaders() {
        const dependents = dependentsContainer.querySelectorAll('.dependent-entry');
        dependents.forEach((dependent, index) => {
            const header = dependent.querySelector('.dependent-header');
            if (header) {
                header.textContent = `Dependente ${index + 1}`;
            }

            // Atualiza o atributo dependente-id conforme a nova ordem
            dependent.setAttribute('dependente-id', index + 1);

            const inputs = dependent.querySelectorAll('input, select');
            inputs.forEach(input => {
                // Atualiza o name preservando todo o nome original, exceto o índice final
                const originalName = input.getAttribute('name');
                if (originalName) {
                    // Preserva tudo antes do último underscore
                    const lastUnderscoreIndex = originalName.lastIndexOf('_');
                    const baseName = (lastUnderscoreIndex !== -1) 
                        ? originalName.substring(0, lastUnderscoreIndex) 
                        : originalName;

                    input.setAttribute('name', `${baseName}_${index + 1}`);
                }
            });
        });
    }
});
