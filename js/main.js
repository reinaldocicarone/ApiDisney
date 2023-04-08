import { conexao } from "./conexao.js";

const body = document.querySelector("body")
const personagens = document.getElementById("listaPersonagens")
const brilho = document.getElementById("efeitoBrilho")
let doc = document.documentElement
let pageAtual = 1

lista();

window.addEventListener('scroll', function () {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
    if (value === 100) {
        lista(pageAtual + 1)
    }
})

function lista(page = 1) {
    pageAtual = page
    conexao.listaPersonagens(page).then(
        res => {
            montaLista(res.data)
            body.classList.add("bodyBlack")
            personagens.classList.add("visibleOpacity")
            brilho.remove();
        }
    )
}

function montaLista(lista) {
    lista.forEach((personagem, index) => {
        personagens.innerHTML += `
            <li id="${personagem._id}">
                <div class="personagem" id="${index}">
                    <div class="imagemPersonagem" style="background-image: url('${personagem.imageUrl}')">
                        <div class="namePersonagem">
                            <label>${personagem.name}</label>
                        </div>
                    <div>
                </div>
            </li>`
    });
}