import fastify from 'fastify' // importa o fastify de dentro do pacote(package.jason)
import { PrismaClient } from '@prisma/client' // importa o PrismaClient

const app = fastify() // cria uma variavel chamada app e chama a função
const prisma = new PrismaClient() // faz a conexão com o banco de dados

// criar a primeira rota
app.get('/users', async () => {
  // async significa assincrona
  const users = await prisma.user.findMany() // vai listar todos os usuarios do meu banco de dados
  return users // retorna os usuarios
  // quando alguém acessar o /hello ele retorna hello world, ou seja, http://localhost:3333/hello
  // return 'Hello World'
})

app
  .listen({
    // metodo listen recebe um objeto de configurações, criar o servidor
    port: 3333,
  })
  .then(() => {
    // assim que o servidor estiver no ar, então eu quero executar uma função
    console.log('HTTP server run on http://localhost:3333')
  })
