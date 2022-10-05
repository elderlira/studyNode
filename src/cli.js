import pegaArquivo from "./index.js"
import fs from 'fs'
import validaLinks from "./validaLinks.js"

const caminho = process.argv

function imprimeLista (valida, listaLinks, identificador = '') {
    if (valida) {
        console.log(
            'lista validada', 
            validaLinks(listaLinks, identificador)
        )
    } else {
        console.log(
            'lista de links', 
            identificador, listaLinks
        )
    }
}

async function processarTexto(argumento) {
    const caminho = argumento[2]
    const valida = argumento[3] === '--valida'

    try {
        if(fs.statSync(caminho).isFile()) {
            const resultado = await pegaArquivo(caminho)
            imprimeLista(valida, resultado)
        } 
    
        if(fs.statSync(caminho).isDirectory()) {
            const arquivos = await fs.promises.readdir(caminho)
            arquivos.forEach(async (arquivo) => {
                const lista = await pegaArquivo(`${caminho}/${arquivo}`)
                imprimeLista(valida, lista, arquivo)
                // console.log('Arquivo: ' + arquivo, lista)
            })
        }
    } catch (erro) {
        if(erro.code === 'ENOENT') {
            console.log('O caminho informado nao é um arquivo nem um diretorio')
        }
    }
}

processarTexto(caminho)