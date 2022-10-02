import chalk from 'chalk'
import fs from 'fs'

const caminhaDoArquivo = './arquivos/texto.md'

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'Arquivo não disponivel no diretorio'))
}

//utilizando a estrutura try/catch e async/await
async function pegaArquivo(caminhaDoArquivo) {
    try {
        const encode = 'utf-8'
        const texto = await fs.promises.readFile(caminhaDoArquivo, encode)
        console.log(chalk.green(texto))
    } catch(erro) {
        tratarErro(erro)
    }
}

// function pegaArquivo(caminhaDoArquivo) {
//     const encode = 'utf-8'
//     fs.promises
//         .readFile(caminhaDoArquivo, encode)
//         .then(texto => console.log(chalk.green(texto)))
//         .catch(erro => tratarErro(erro))
// }

pegaArquivo(caminhaDoArquivo)
