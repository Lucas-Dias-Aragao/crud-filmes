//conexao com a api
const listaFilmes = () => {
    //por padrão, faz um get e retorna uma promise
    return fetch(`http://localhost:3000/filmes/`)
        .then(resposta => {
            return resposta.json();
        })
}

const criaFilme = (titulo,
    estreia,
    duracao,
    classificacao,
    idioma,
    orcamento
) => {
    return fetch(`http://localhost:3000/filmes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            estreia: estreia,
            duracao: duracao,
            classificacao: classificacao,
            idioma: idioma,
            orcamento: orcamento
        })
    })
    .then( resposta => {
        return resposta.body;
    })
}

const removeFilme = (id) => {
    return fetch(`http://localhost:3000/filmes/${id}`, {
        method: 'DELETE'
    })
}

const detalhaFilme = (id) => {
    return fetch(`http://localhost:3000/filmes/${id}`)
        .then(resposta => {
            return resposta.json();
        })
}

const atualizaFilme = (id, titulo, estreia, duracao, classificacao, idioma, orcamento) => {
    return fetch(`http://localhost:3000/filmes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            estreia: estreia,
            duracao: duracao,
            classificacao: classificacao,
            idioma: idioma,
            orcamento: orcamento

        })
    })
    .then( resposta => {
        return resposta.json;
    })
}

export const filmeService = {
    listaFilmes,
    criaFilme,
    removeFilme,
    detalhaFilme,
    atualizaFilme
}




