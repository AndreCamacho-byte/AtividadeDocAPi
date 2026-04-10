import swaggerJSDoc from "swagger-jsdoc"; //importa o swagger-jsdoc para gerar a documentação Swagger

const options = {
    definition: {
        openapi: "3.0.0", //versão do OpenAPI
        info: {
            title: "API em node.js com Express",//título da documentação
            version: "1.0.0",//versão da documentação,
            description: "Documentação da API com Swagger",//descrição da documentação
        },

        servers: [
            {
                url: "http://localhost:3000",//URL do servidor onde a API está rodando
            }
        ]
    },
    //"Apis" define em quais arquivos o swagger-jsdoc deve procurar as anotações para gerar a documentação. No caso, estamos apontando para o server.js e usuario.route.js, onde as rotas da API estão definidas e anotadas com Swagger.
    apis: ["./server.js", "./routes/usuario.route.js"],//caminho para os arquivos onde as rotas da API estão definidas
};

const swaggerSpec = swaggerJSDoc(options);//gera a documentação Swagger com base nas opções definidas

export default swaggerSpec;//exporta a documentação Swagger para ser usada em outros arquivos, como o server.js