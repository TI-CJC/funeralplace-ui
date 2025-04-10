let dadosContrato = {
    titular: null,
    dependentes: [],
    agregados: []
};

// Função para capturar os dados do titular
function capturarDadosTitular() {
    let nomeTitular = document.getElementById('nomeTitular').value;
    let sobrenomeTitular = document.getElementById('sobrenomeTitular').value;
    let dataNascTitular = document.getElementById('dataNascTitular').value;
    let cpfTitular = document.getElementById('cpfTitular').value; 

    // Atualiza os dados do titular na estrutura de dados
    dadosContrato.titular = {
        nome: nomeTitular + " " + sobrenomeTitular,
        data_nascimento: dataNascTitular,
        cpf: cpfTitular,
        parentesco: 'Titular'
    };

    atualizarOpcoesBeneficiarios();
}

// Função para capturar os dados dos dependentes
function capturarDadosDependentes() {
    let dependentes = [];
    const dependentsContainer = document.getElementById('dependentsContainer');
    const dependentesElements = dependentsContainer.querySelectorAll('.dependent-entry');

    dependentesElements.forEach(dependenteElement => {
        let id = dependenteElement.getAttribute('dependente-id');
        let nome = dependenteElement.querySelector('#nomeDependente').value;
        let cpf = dependenteElement.querySelector('#cpfDependente').value;
        let dataNascDependente = dependenteElement.querySelector('#dataNascDependente').value;
        let parentescoDependente = dependenteElement.querySelector('#parentescoDependente').value;

        let dependente = {
            id: id,
            nome: nome,
            cpf: cpf,
            data_nascimento: dataNascDependente,
            parentesco: parentescoDependente
        };

        dependentes.push(dependente);
    });

    dadosContrato.dependentes = dependentes;
    atualizarOpcoesBeneficiarios();
}

// Função para capturar os dados dos agregados
function capturarDadosAgregados() {
    let agregados = [];
    const agregadosContainer = document.getElementById('agregadosContainer');
    const agregadosElements = agregadosContainer.querySelectorAll('.agregado-entry');

    agregadosElements.forEach(agregadoElement => {
        let id = agregadoElement.getAttribute('agregado-id');
        let nome = agregadoElement.querySelector('#nomeAgregado').value;
        let cpf = agregadoElement.querySelector('#cpfAgregado').value;
        let dataNascAgregado = agregadoElement.querySelector('#dataNascAgregado').value;
        let parentescoAgregado = agregadoElement.querySelector('#parentescoAgregado').value;

        let agregado = {
            id: id,
            nome: nome,
            cpf: cpf,
            data_nascimento: dataNascAgregado,
            parentesco: parentescoAgregado
        };

        agregados.push(agregado);
    });

    dadosContrato.agregados = agregados;
    atualizarOpcoesBeneficiarios();
}

// Função para atualizar as opções dos campos de beneficiários
function atualizarOpcoesBeneficiarios() {
    let cremacaoBeneficiario = document.getElementById('cremacaoBeneficiario');
    let seguroTitular = document.getElementById('seguroTitular');
    let seguroBeneficiario = document.getElementById('seguroBeneficiario');

    // Limpa as opções existentes
    cremacaoBeneficiario.innerHTML = '<option value="" selected>Selecione</option>';
    seguroTitular.innerHTML = '<option value="" selected>Selecione</option>';
    seguroBeneficiario.innerHTML = '<option value="" selected>Selecione</option>';

    // Adiciona o titular, se existir
    if (dadosContrato.titular) {
        let optionTitular = document.createElement('option');
        optionTitular.value = JSON.stringify(dadosContrato.titular);
        optionTitular.textContent = dadosContrato.titular.nome;
        cremacaoBeneficiario.appendChild(optionTitular);
        seguroTitular.appendChild(optionTitular.cloneNode(true));
        seguroBeneficiario.appendChild(optionTitular.cloneNode(true));
    }

    // Adiciona os agregados
    dadosContrato.agregados.forEach(agregado => {
        let optionAgregado = document.createElement('option');
        optionAgregado.value = JSON.stringify(agregado);
        optionAgregado.textContent = agregado.nome;
        cremacaoBeneficiario.appendChild(optionAgregado);
        seguroTitular.appendChild(optionAgregado.cloneNode(true));
        seguroBeneficiario.appendChild(optionAgregado.cloneNode(true));
    });

    // Adiciona os dependentes
    dadosContrato.dependentes.forEach(dependente => {
        let optionDependente = document.createElement('option');
        optionDependente.value = JSON.stringify(dependente);
        optionDependente.textContent = dependente.nome;
        cremacaoBeneficiario.appendChild(optionDependente);
        seguroTitular.appendChild(optionDependente.cloneNode(true));
        seguroBeneficiario.appendChild(optionDependente.cloneNode(true));
    });
}

// Função para preencher os dados do beneficiário ou titular selecionado
function preencherDados(idCampo, dados) {
    document.getElementById('nome' + idCampo).value = dados.nome;
    document.getElementById('cpf' + idCampo).value = dados.cpf;
    document.getElementById('dataNasc' + idCampo).value = dados.data_nascimento;
    document.getElementById('parentesco' + idCampo).value = dados.parentesco;
}

// Função para adicionar event listeners aos selects
function adicionarEventListeners() {
    document.getElementById('cremacaoBeneficiario').addEventListener('change', function() {
        let dados = JSON.parse(this.value);
        preencherDados('BeneficiarioCremacao', dados);
    });

    document.getElementById('seguroTitular').addEventListener('change', function() {
        let dados = JSON.parse(this.value);
        preencherDados('TitularSeguro', dados);
    });

    document.getElementById('seguroBeneficiario').addEventListener('change', function() {
        let dados = JSON.parse(this.value);
        preencherDados('BeneficiarioSeguro', dados);
    });
/*
    document.getElementById('cremacaoSelect').addEventListener('change', function() {
        let disabled = this.value === '';
        document.getElementById('cremacaoBeneficiario').disabled = disabled;
        document.getElementById('nomeBeneficiarioCremacao').disabled = disabled;
        document.getElementById('cpfBeneficiarioCremacao').disabled = disabled;
        document.getElementById('dataNascBeneficiarioCremacao').disabled = disabled;
        document.getElementById('parentescoBeneficiarioCremacao').disabled = disabled;
    });

    document.getElementById('seguroSelect').addEventListener('change', function() {
        let disabled = this.value === '';
        document.getElementById('seguroTitular').disabled = disabled;
        document.getElementById('nomeTitularSeguro').disabled = disabled;
        document.getElementById('cpfTitularSeguro').disabled = disabled;
        document.getElementById('dataNascTitularSeguro').disabled = disabled;
        document.getElementById('parentescoTitularSeguro').disabled = disabled;
        document.getElementById('seguroBeneficiario').disabled = disabled;
        document.getElementById('nomeBeneficiarioSeguro').disabled = disabled;
        document.getElementById('cpfBeneficiarioSeguro').disabled = disabled;
        document.getElementById('dataNascBeneficiarioSeguro').disabled = disabled;
        document.getElementById('parentescoBeneficiarioSeguro').disabled = disabled;
    });
    */
}

// Inicializa os event listeners após carregar o DOM
document.addEventListener('DOMContentLoaded', function() {
    adicionarEventListeners();
});

export { capturarDadosDependentes, capturarDadosTitular, capturarDadosAgregados, atualizarOpcoesBeneficiarios };
