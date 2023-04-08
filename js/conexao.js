async function listaPersonagens(page = null) {
    const linkPersonagens = "https://api.disneyapi.dev/characters?pageSize=100"
    const conexao = page ?
        await fetch(`${linkPersonagens}&page=${page}`) :
        await fetch(`${linkPersonagens}&page=1`);
    const res = await conexao.json();

    return res;
}


export const conexao = {
    listaPersonagens
}