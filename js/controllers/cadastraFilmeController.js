import { filmeService } from "../services/filmeService.js";

const form = document.querySelector('[data-cadFilme]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const titulo = evento.target.querySelector('#inputTitulo').value;
    const estreia = evento.target.querySelector('#inputEstreia').value;
    const duracao = evento.target.querySelector('#inputDuracao').value;
    const classificacao = evento.target.querySelector('#inputClassificacao').value;
    const idioma = evento.target.querySelector('#inputIdioma').value;
    const orcamento = evento.target.querySelector('#inputOrcamento').value;

    let status = verificaStatusCadastro(titulo, estreia, duracao, classificacao, idioma, orcamento);

    if(status) {
        filmeService.criaFilme(titulo, estreia, duracao, classificacao, idioma, orcamento)
        .then(() => {
            window.location.href = "../../views/status/sucesso.html";
        })
    } else {
        window.location.href = "../../views/status/401.html";
    }
})

function verificaStatusCadastro(titulo, estreia, duracao, classificacao, idioma, orcamento) {
    const campos = {
        titulo: titulo,
        estreia: estreia,
        duracao: duracao,
        classificacao: classificacao,
        idioma: idioma,
        orcamento: orcamento
    };

    let camposPreenchidos = 0;
    for (const chave in campos) {
        if (campos[chave] !== '') {
            camposPreenchidos++;
        }
    }

    if(camposPreenchidos > 1) {
        return true;
    } else {
        return false;
    }

}