
import prisma from '../config/prisma.js';

// listando todas as despesas 
    export async function listarDespesas(){
        return await prisma.despesa.findMany();
    }   


// buscando as despesas pelo id
export async function buscarDespesaPorId(id) {
    return await prisma.despesa.findUnique({
        where: { id: Number(id) }
    });
}
//cria um depesa nova 
export async function criarDespesa(dados) {
    return await prisma.despesa.create({
        data: {
            descricao: dados.descricao,
            valor: Number(dados.valor),
            categoria: dados.categoria
        }
    });
}

// modifica a despesa que já existe
export async function atualizarDespesa(id, dados) {
    return await prisma.despesa.update({
        where: { id: Number(id) },
        data: {
            descricao: dados.descricao,
            valor: Number(dados.valor),
            categoria: dados.categoria
        }
    });
}

//exclui a despesa pelo id 
export async function excluirDespesa(id) {
    return await prisma.despesa.delete({
        where: { id: Number(id) }
    });
}

