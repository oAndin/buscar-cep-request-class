console.log("Hello World!");

function buscarEstados() {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
        .then(resposta => resposta.json())
        .then(listaDeEstados => {
            listaDeEstados.forEach(estado => {
                estados.innerHTML += `
                <option value="${estado.sigla}">${estado.nome}</option>
                `
            })
        })
};

function buscarCep() {
    if (cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then(resposta => resposta.json())
            .then(endereco => {
                logradouro.value = endereco.logradouro;
                bairro.value = endereco.bairro;
                localidade.value = endereco.localidade;
                estados.value = endereco.uf;
            })
    }
}
buscarCep();
buscarEstados();