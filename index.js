
import express from 'express';
import 'dotenv/config';
import despesaRoutes from './src/Routes/despesaRoutes.js';

const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Configuração para receber dados
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página inicial
app.get('/', (req, res) => {
    res.send('Olá! Esse é o Orion Centro de Despesas!');
});

// Página para cadastrar uma nova despesa
app.get('/despesas/nova', (req, res) => {
    res.render('novaDespesa', {
        sucesso: req.query.sucesso === '1'
    });
});

// Rotas de despesas
app.use('/despesas', despesaRoutes);

export default app;
