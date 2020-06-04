window.onload = function pegarDados() {

    let fotos = document.getElementById("fotos");


    fetch('https://picsum.photos/v2/list?page=2&limit=10')
        .then(
            response => response.json()
        )

    .then(
        data => {
            for (i = 0; i < data.length; i++) {
                fotos.innerHTML = fotos.innerHTML +
                    "<h1>" + data[i].id + "</h1><p>" + data[i].author + "</p>" + data[i].download_url + "</p>";
            }
        }
    )
}