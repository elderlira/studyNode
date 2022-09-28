import chalk from 'chalk'
import fs from 'fs'

const caminhaDoArquivo = './arquivos/texto.md'

function tratarErro(erro) {
    throw new Error(erro)
}

function pegaArquivo(caminhaDoArquivo) {
    const encode = 'utf-8'
    fs.readFile(caminhaDoArquivo, encode, (erro, texto) => {
        if (erro) {
            tratarErro(erro)
        }
        console.log(chalk.blue(texto))
    })
}

pegaArquivo(caminhaDoArquivo)
