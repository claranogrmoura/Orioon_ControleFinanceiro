
import * as Despesas from '../models/despesaModel.js';

class DespesaController {

    all = async (req, res) => {
        try {
            const despesas = await Despesas.listarDespesas();
            return res.status(200).json(despesas);
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao buscar despesas',
                error: error.message
            });
        }
    }

    create = async (req, res) => {
        try {
            const novaDespesa = await Despesas.criarDespesa(req.body);
            return res.status(201).json(novaDespesa);
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao criar despesa',
                error: error.message
            });
        }
    }

    update = async (req, res) => {
        try {
            const despesaAtualizada = await Despesas.atualizarDespesa(
                req.params.id,
                req.body
            );

            return res.status(200).json(despesaAtualizada);
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao atualizar despesa',
                error: error.message
            });
        }
    }

    delete = async (req, res) => {
        try {
            await Despesas.excluirDespesa(req.params.id);

            return res.status(200).json({
                message: 'Despesa excluída com sucesso'
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao excluir despesa',
                error: error.message
            });
        }
    }
}

export default new DespesaController();
