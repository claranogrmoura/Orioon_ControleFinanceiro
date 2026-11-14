
import express from 'express';
import 'dotenv/config';
import despesaRoutes from './src/routes/despesaRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Olá! Esse é o Orion Centro de Despesas!');
});

app.use('/despesas', despesaRoutes);

export default app;
