import { filmeService } from "../services/filmeService.js";

const criaLinha = (id, titulo, estreia, duracao, classificacao,
    idioma, orcamento
) => {
    const linhaNovoFilme = document.createElement('tr');
    const conteudo = `
        <td data-id>${id}</td>
        <td>${titulo}</td>
        <td>${estreia}</td>
        <td>${duracao}</td>
        <td>${classificacao}</td>
        <td>${idioma}</td>
        <td>${orcamento}</td>
        <td>
            <div class="tabela-filmes-btn">
                <button class="btn-editar"><i class="bi bi-pencil-square"></i></button>
                <button class="btn-excluir"><i class="bi bi-trash3-fill"></i></button>
            </div>
        </td> 
        `

    linhaNovoFilme.innerHTML = conteudo;
    linhaNovoFilme.dataset.id = id;
    return linhaNovoFilme;
}

const tabela = document.querySelector('.tabela-filmes');

//excluir
tabela.addEventListener('click', (evento) => {
    let ehBotaoDeletar = evento.target.className == "btn-excluir";

    if (ehBotaoDeletar) {
        const linhaFilme = evento.target.closest('[data-id]');
        let id = linhaFilme.dataset.id;
        filmeService.removeFilme(id)
            .then(() => {
                linhaFilme.remove();
            })
    }
})

//direcionar para página de update
tabela.addEventListener('click', (evento) => {
    let ehBotaoEditar = evento.target.className == "btn-editar";

    if (ehBotaoEditar) {
        const linhaFilme = evento.target.closest('[data-id]');
        let id = linhaFilme.dataset.id;
        window.location.href = `../../views/filme/editar-filme.html?id=${id}`;
    }
})

//recebe a resposta e exibe o conteúdo na tela
filmeService.listaFilmes()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaLinha(elemento.id, elemento.titulo, elemento.estreia, elemento.duracao, elemento.classificacao,
                elemento.idioma, elemento.orcamento))
        })
    });

