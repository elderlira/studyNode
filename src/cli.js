import pegaArquivo from "./index.js"
import fs from 'fs'

const caminho = process.argv

async function processarTexto(argumento) {
    const caminho = argumento[2]
    try {
        if(fs.statSync(caminho).isFile()) {
            const resultado = await pegaArquivo(caminho)
            console.log(resultado)
        } 
    
        if(fs.statSync(caminho).isDirectory()) {
            const arquivos = await fs.promises.readdir(caminho)
            arquivos.forEach(async (arquivo) => {
                const lista = await pegaArquivo(`${caminho}/${arquivo}`)
                console.log('Arquivo: ' + arquivo, lista)
            })
        }
    } catch (erro) {
        if(erro.code === 'ENOENT') {
            console.log('O caminho informado nao é um arquivo nem um diretorio')
        }
    }
}

processarTexto(caminho)