import chalk from 'chalk'
import fs from 'fs'

const caminhaDoArquivo = './arquivos/texto.md'

function extrairLinks(texto) {
    const regex = /\[([^[\]]*)\]\((https?:\/\/[^\s]*)\)/gm
    const conteudo = [...texto.matchAll(regex)]
    const resultado = conteudo.map(res => (
        {[res[1]]: res[2]})
    )
   
    return resultado
}

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não disponivel no diretorio'))
}

async function pegaArquivo(caminhaDoArquivo) {
    try {
        const encode = 'utf-8'
        const texto = await fs.promises.readFile(caminhaDoArquivo, encode)
        console.log(extrairLinks(chalk.green(texto)))
    } catch(erro) {
        tratarErro(erro)
    } finally {
        console.log(chalk.blue('processo finalizado'))
    }
}

pegaArquivo(caminhaDoArquivo)
