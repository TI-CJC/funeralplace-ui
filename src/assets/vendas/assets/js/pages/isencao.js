document.addEventListener('DOMContentLoaded', () => {
    const agregadosContainer = document.getElementById('agregadosContainer');
    const addAgregadoBtn = document.getElementById('addAgregadoBtn');

    // Função que define a interação entre os campos
    function updateFaixaValorAgregadoStatus(agregadoElement) {
        if (!agregadoElement) {
            console.error('Agregado element não foi encontrado.');
            return;
        }

        const isencaoField = agregadoElement.querySelector('[name^="isencao_agregado_"]');
        const faixaValorField = agregadoElement.querySelector('[name^="faixa_valor_agregado_"]');

        if (isencaoField && faixaValorField) {
            isencaoField.addEventListener('change', function () {
                if (this.value === 'Y') {
                    faixaValorField.setAttribute('disabled', '');  // Adiciona o atributo readonly corretamente
                    faixaValorField.removeAttribute('required');   // Remove o atributo required
                } else {
                    faixaValorField.removeAttribute('disabled');   // Remove o atributo readonly
                    faixaValorField.setAttribute('required', '');  // Adiciona o atributo required corretamente
                }
            });
        } else {
            console.error('Campos de isenção ou faixa de valor não encontrados no agregado.');
        }
    }

    // Atualiza o status ao adicionar um novo agregado
    addAgregadoBtn.addEventListener('click', () => {
        setTimeout(() => {
            const novosAgregados = agregadosContainer.querySelectorAll('.agregado-entry');
            const ultimoAgregado = novosAgregados[novosAgregados.length - 1];

            if (ultimoAgregado) {
                updateFaixaValorAgregadoStatus(ultimoAgregado);
            }
        }, 0);
    });
});
