function enviarDados() {
    var formData = new FormData();

    // Função para formatar data no padrão ISO 8601 com timezone
    function formatDate(date) {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString();
    }

    // Função para formatar CPF removendo caracteres especiais
    function formatCPF(cpf) {
        return cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    }

    // Função para processar e adicionar dados ao formData
    function processAndAppendData(formElement) {
        var formDataLocal = new FormData(formElement);
        for (var pair of formDataLocal.entries()) {
            if (pair[1] instanceof File) {
                formData.append(pair[0], pair[1]); // Se for um arquivo, adiciona diretamente
            } else {
                var element = formElement.querySelector(`[name="${pair[0]}"]`);
                if (element) {
                    if (element.type === 'date') {
                        formData.append(pair[0], formatDate(pair[1]));
                    } else if (element.classList.contains('cpf')) {
                        formData.append(pair[0], formatCPF(pair[1]));
                    } else {
                        // Se for um campo de beneficiário, adicionar apenas o ID ou valor único
                        if (pair[0] === 'cremacaoBeneficiario' || pair[0] === 'seguroTitular' || pair[0] === 'seguroBeneficiario') {
                            // Aqui você deve ajustar para enviar apenas o ID ou valor único
                            // correspondente ao beneficiário selecionado
                            formData.append(pair[0], pair[1]);
                        } else {
                            formData.append(pair[0], pair[1]);
                        }
                    }
                } else {
                    formData.append(pair[0], pair[1]);
                }
            }
        }
    }

    // Capturar dados dos formulários
    processAndAppendData(document.getElementById('DadosIniciaisForm'));
    processAndAppendData(document.getElementById('DadosDoTiularForm'));
    processAndAppendData(document.getElementById('DadosDependentesForm'));
    processAndAppendData(document.getElementById('DadosAgregadosForm'));
    processAndAppendData(document.getElementById('DadosProdutosForm'));

    // Exibir feedback visual de carregamento
    var finalizarBtn = document.getElementById('finalizar-btn');
    var pix = document.getElementById('pix')
    finalizarBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
    finalizarBtn.classList.add('disabled');

// Enviar dados via AJAX
fetch('https://n8n.coll2b.com/webhook/06ce330e-b721-4965-869c-7f1e2c1c7566', {
    method: 'POST',
    body: formData
})
.then(response => {
    if (!response.ok) {
        // Se houver erro, captura o body da resposta para processá-lo
        return response.json().then(errData => {
            throw errData; // Lança o erro com o conteúdo da resposta
        });
    }
    return response.json(); // Se a resposta for sucesso, continua o processamento
})
.then(data => {
    console.log('Dados enviados com sucesso:', data);
    finalizarBtn.innerHTML = '<i class="ti ti-circle-check me-1"></i>Sucesso!';
    finalizarBtn.classList.remove('btn-danger'); // Remove classe de erro
    finalizarBtn.classList.add('btn-success', 'disabled'); // Adiciona classe de sucesso e desabilita o botão
    pix.value = data.pix; // Escreve o valor no campo 'pix'

    // Remove o listener de reenvio após sucesso
    finalizarBtn.removeEventListener('click', enviarDados);
})
.catch(error => {
    console.error('Erro ao enviar dados:', error);

    // Atualizar interface para erro com possibilidade de reenviar
    finalizarBtn.innerHTML = '<i class="ti ti-alert-triangle me-1"></i>Reenviar';
    finalizarBtn.classList.remove('btn-success', 'disabled'); // Remove classes de sucesso e desabilitação
    finalizarBtn.classList.add('btn-danger');

    // Escreve a resposta de erro no campo 'pix' também
    pix.value = error.pix || 'Erro ao processar os dados. Tente novamente.'; // Exibe mensagem apropriada

    // Adicionar evento para tentar enviar novamente ao clicar
    finalizarBtn.addEventListener('click', enviarDados);
});
}
