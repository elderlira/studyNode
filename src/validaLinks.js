function trataErro (erro) {
    console.log(erro)
    // if (erro.cause.code === 'ENOTFOUND') {
    //     return 'Página não encontrada ou indisponível no momento'
    // } else {
    //     return 'Algo deu errado'
    // }
}

function extrairLinks(arrayDeLinks) {
    const links = arrayDeLinks.map((links) => Object.values(links).join())
    return links
}

async function checaStatus(listaDeLinks) {

    const promessas = Promise.all(
        listaDeLinks.map(async (url)=> {
            try {
                const response = await fetch(url)
                return `${response.status} - ${response.statusText}`
            } catch (erro) {
                trataErro(erro)
            }
        })
    )
    return promessas
}

export default async function validaLinks (listaDeLinks) {
    const links = extrairLinks(listaDeLinks)
    const status = await checaStatus(links)

    return listaDeLinks.map((objeto, index) => ({
        ...objeto,
        status: status[index],
    }))
}