const textareaAtores = document.getElementById('textAreaAtores');
const textareaSinopse = document.getElementById('textAreaSinopse');
const contador = document.getElementById('contador');

function adicionaAtor() {    
    let inputAtor = document.getElementById('addAtor');

    if (inputAtor.value.trim() !== "") {
        textareaAtores.value += inputAtor.value + '; ';
        inputAtor.value = '';
    }
}

textareaSinopse.addEventListener('input', function() {
    contador.textContent = textareaSinopse.value.length;
});

