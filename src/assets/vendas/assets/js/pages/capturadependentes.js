function capturarDadosDependentes() {
    let dependentes = [];
    const dependentsContainer = document.getElementById('dependentsContainer');
    const dependentesElements = dependentsContainer.querySelectorAll('.dependent-entry');

    dependentesElements.forEach(dependenteElement => {
        let id = dependenteElement.getAttribute('data-id');
        let nome = dependenteElement.querySelector('.nome-dependente').value;
        let cpf = dependenteElement.querySelector('.cpf-dependente').value;
        // Captura outros campos conforme necessário

        let dependente = {
            id: id,
            nome: nome,
            cpf: cpf
            // Adicione outros campos conforme necessário
        };

        dependentes.push(dependente);
    });

    dadosContrato.dependentes = dependentes;
}
