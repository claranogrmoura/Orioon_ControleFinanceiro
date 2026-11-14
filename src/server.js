
import express from 'express';

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao nosso sistema de controle de despesas!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

