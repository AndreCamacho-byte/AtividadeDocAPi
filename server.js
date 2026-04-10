import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import usuarioRoute from './routes/usuario.route.js';

const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * @swagger 
 * /:
 *  get:
 *   summary: Inicial route of API
 *   tags: [Inicial]
 *   responses:
 *     200:
 *       description: Sucessful response
 */

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'API is working' });
});

app.use('/usuarios', usuarioRoute); //rota para as rotas de usuários

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); //rota para acessar a documentação Swagger

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    console.log(`Swagger documentation is available at http://localhost:${PORT}/api-docs`);
});