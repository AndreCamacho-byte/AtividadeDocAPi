import express from 'express';

const router = express.Router();

let ALUNOSDS2A = [
    {id: 1, nome: 'João', email: 'joao@email.com'},
    {id: 2, nome: 'Maria', email: 'maria@email.com'},
    {id: 3, nome: 'Pedro', email: 'pedro@email.com'}
];

/**
 * @swagger 
 * /usuarios:
 *  get:
 *   summary: Show all usuarios
 *   tags: [usuarios]
 *   responses:
 *     200:
 *       description: usuarios list returned successfully
 */

router.get('/', (req, res) => {
    res.status(200).json(ALUNOSDS2A);
});

/**
 * @swagger 
 * /usuarios:
 *  post:
 *      summary: Create a new usuario
 *      tags: [usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *             application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                    nome:
 *                      type: string
 *                    email:
 *                      type: string
 *      responses:
 *        201:
 *          description: "usuario created successfully"
 *        400:
 *          description: "Bad request, falta nome e email"
 *
 */

router.post('/', (req, res) => {
    //console.log(req.body);
    const { nome, email } = req.body;

    if(!nome || !email) {
        return res.status(400).json({ msg: 'Nome e email são obrigatórios' });
    }

    const novoAluno = {
        id: ALUNOSDS2A.length + 1,
        nome,
        email
    };

    ALUNOSDS2A.push(novoAluno);

    res.status(201).json({msg: 'Aluno criado com sucesso'});
});

export default router;