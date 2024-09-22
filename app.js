const form = document.getElementById('formFilme');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const titulo = document.querySelector('.titulo').value.trim();
    const estreia = document.querySelector('.estreia').value.trim();
    const duracao = document.querySelector('.duracao').value.trim();
    const classificacao = document.querySelector('.classificacao').value.trim();
    const idioma = document.querySelector('.idioma').value.trim();
    const orcamento = document.querySelector('.orcamento').value.trim();

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

    if (camposPreenchidos > 1) {
        try {
            const response = await fetch('http://localhost:3000/filmes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(campos)
            });

            if (response.ok) {
                window.location.href = '../status/sucesso.html';
            }
        } catch (error) {
            //window.location.href = '../status/401.html';
        }
    } else {
        //window.location.href = '../status/401.html';
    }
});


async function getFilmes() {
    try {
        const response = await fetch('http://localhost:3000/filmes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const filmes = await response.json();
            console.log(filmes);
        } else {
            throw new Error('Falha na requisição GET');
        }
    } catch (error) {
        console.error('Erro:', error); 
    }
}

// Função para requisição PUT
async function updateFilme(id, updatedCampos) {
    try {
        const response = await fetch(`http://localhost:3000/filmes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCampos)
        });

        if (response.ok) {
            const updatedFilme = await response.json();
            console.log(updatedFilme);
        } else {
            throw new Error('Falha na requisição PUT');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para requisição DELETE
async function deleteFilme(id) {
    try {
        const response = await fetch(`http://localhost:3000/filmes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`Filme com ID ${id} deletado com sucesso`);
        } else {
            throw new Error('Falha na requisição DELETE');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}



