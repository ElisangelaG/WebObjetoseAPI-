var receita = {
    titulo: "Chocolate",
    porcoes: 2,
    ingredientes: ["cacau", "leite", "manteiga"]

};

console.log(receita.titulo);
console.log(receita.porcoes);

for (i = 0; i < receita.ingredientes.length; i++) {
    console.log(receita.ingredientes[i]);
}

let livros = [{

        titulo: "O menino do pijama listrado",
        autor: "John Boyne",
        livrolido: true,
    },
    {
        titulo: "Como eu era antes de vc",
        autor: "Jojo Moyes",
        livrolido: true,
    },

    {
        titulo: "Como fiquei depois de vc",
        autor: "Jojo Moyes",
        livrolido: true,
    },

    {
        titulo: "O corpo fala: a linguagem silenciosa da comunicação não-verbal",
        autor: "Roland Tompakow e Pierre Weil",
        livrolido: false,
    }
]

for (i = 0; i < livros.length; i++) {
    console.log(livros[i].titulo);
    console.log(livros[i].autor);
    if (livros[i].livrolido == true) {
        console.log("Você já leu este livro");

    } else
        console.log("Você ainda não leu este livro");

}