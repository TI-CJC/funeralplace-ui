const cep = document.querySelector('#cep')

const showData = (result)=>{
    for(const campoID in result){
        if(document.querySelector("#"+campoID)){
            document.querySelector("#"+campoID).value = result[campoID]
        }
    }
}

const clearData = () => {
    const campos = ['logradouro', 'bairro', 'localidade', 'uf'];
    campos.forEach(campoID => {
        const campoElement = document.querySelector("#" + campoID);
        if (campoElement) {
            campoElement.value = '';
        }
    });
}


cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        if (!response.ok) {
            // Se a resposta não for bem-sucedida, define a mensagem de erro
            cep.setCustomValidity('Formato de CEP inválido');
            clearData();
            return;
        }
        response.json().then(data => {
            if (data.erro) {
                // Se o CEP não for encontrado, define a mensagem de erro
                cep.setCustomValidity('CEP não encontrado');
                clearData();
            } else {
                // Se não houver erro, limpa a mensagem de erro e mostra os dados
                cep.setCustomValidity('');
                showData(data);
            }
        })
    })

})