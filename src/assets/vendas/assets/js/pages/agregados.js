'use strict';
import { applyMasksAndValidation } from './form-masking-custom.js';
import { applyCPFValidation } from './validacpf.js';

document.addEventListener('DOMContentLoaded', () => {
    let agregadoCount = 0;
    const agregadosContainer = document.getElementById('agregadosContainer');
    const agregadoTemplate = document.getElementById('agregadoTemplate').content;
    const addAgregadoBtn = document.getElementById('addAgregadoBtn');
    const removeAgregadoBtn = document.getElementById('removeAgregadoBtn');

    addAgregadoBtn.addEventListener('click', () => {
        agregadoCount++;
        const newAgregadoFragment = agregadoTemplate.cloneNode(true);
        const newAgregado = newAgregadoFragment.querySelector('.agregado-entry'); // Seleciona o elemento real
        updateAgregadoFields(newAgregado, agregadoCount);
        agregadosContainer.appendChild(newAgregadoFragment); // Adiciona o fragmento inteiro ao container
        applyMasksAndValidation(newAgregado); // Apply masks and validation to the new agregado
        applyCPFValidation(newAgregado); // Apply CPF validation to the new agregado
    });

    removeAgregadoBtn.addEventListener('click', () => {
        if (agregadoCount > 0) {
            agregadosContainer.removeChild(agregadosContainer.lastElementChild);
            agregadoCount--;
            updateAgregadoHeaders();
        }
    });

    function updateAgregadoFields(agregadoElement, index) {
        const header = agregadoElement.querySelector('.agregado-header');
        if (header) {
            header.textContent = `Agregado ${index}`;
        }

        // Atualiza o atributo agregado-id para identificar o agregado
        agregadoElement.setAttribute('agregado-id', index);

        const inputs = agregadoElement.querySelectorAll('input, select');
        inputs.forEach(input => {
            // Define um atributo agregado-id para os inputs se necessário
            input.setAttribute('agregado-id', index);
            
            // Incrementa o name do input com "_" + o número da sequência
            const originalName = input.getAttribute('name');
            if (originalName) {
                input.setAttribute('name', `${originalName}_${index}`);
            }
        });
    }

    function updateAgregadoHeaders() {
        const agregados = agregadosContainer.querySelectorAll('.agregado-entry');
        agregados.forEach((agregado, index) => {
            const header = agregado.querySelector('.agregado-header');
            if (header) {
                header.textContent = `Agregado ${index + 1}`;
            }

            // Atualiza o atributo agregado-id conforme a nova ordem
            agregado.setAttribute('agregado-id', index + 1);

            const inputs = agregado.querySelectorAll('input, select');
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
