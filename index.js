import chalk from 'chalk'
import fs from 'fs'

const caminhaDoArquivo = './arquivos/texto.md'

function tratarErro(erro) {
    throw new Error(erro)
}

function pegaArquivo(caminhaDoArquivo) {
    const encode = 'utf-8'
    fs.promises
        .readFile(caminhaDoArquivo, encode)
        .then(texto => console.log(chalk.green(texto)))
        .catch(erro => tratarErro(erro))
}

pegaArquivo(caminhaDoArquivo)
