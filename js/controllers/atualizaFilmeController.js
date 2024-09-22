import { filmeService } from "../services/filmeService.js";

const url = new URL(window.location);
const id = url.searchParams.get('id');

const inputTitulo = document.querySelector('#inputTitulo');
const inputEstreia = document.querySelector('#inputEstreia');
const inputDuracao = document.querySelector('#inputDuracao');
const inputClassificacao = document.querySelector('#inputClassificacao');
const inputIdioma = document.querySelector('#inputIdioma');
const inputOrcamento = document.querySelector('#inputOrcamento');

filmeService.detalhaFilme(id)
.then( dados => {
    console.log(dados)
    inputTitulo.value = dados.titulo;
    inputEstreia.value = dados.estreia;
    inputDuracao.value = dados.duracao;
    inputClassificacao.value = dados.classificacao;
    inputIdioma.value = dados.idioma;
    inputOrcamento.value = dados.orcamento;
    
})

const formulario = document.querySelector('[data-cadFilme]');
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    filmeService.atualizaFilme(id, inputTitulo.value,
        inputEstreia.value,
        inputDuracao.value,
        inputClassificacao.value,
        inputIdioma.value,
        inputOrcamento.value)
        .then(() => {
            window.location.href = '../../views/status/sucesso-update.html'
        })
})
