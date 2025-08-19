import app from './src/app.js'

import conexao from './infra/conexao.js'

const port = 3000

//Estabelecer a conexão

conexao.connect((error) => {
    if (error) { 
        console.error('Error', error);
    }
    else { 
        console.log('Conexão bem sucedida')
        app.listen(port, () => {
        console.log(`Servidor rodando / em http://localhost:${port}`)
})
    }
})

// Listening (Escutando)
app.listen(port, () => {
    console.log(`Servidor rodando \
    em http://localhost:${port}`)
})