window.onload = function pegarDados() {

    let tabela = document.getElementById("tabela");

    fetch('https://picsum.photos/v2/list?page=2&limit=20')
        .then(
            response => response.json()
        )
        .then(
            data => {
                data.forEach(pessoa => {
                    let linha = tabela.insertRow(-1);
                    let codigo = linha.insertCell(0);
                    let autor = linha.insertCell(1);
                    let foto = linha.insertCell(2);
                    codigo.innerHTML = pessoa.id;
                    autor.innerHTML = pessoa.author;
                    foto.innerHTML = pessoa.download_url;

                })


            }
        )
}