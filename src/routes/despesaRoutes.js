
import { Router } from "express";
import despesaController  from '../controllers/despesaController.js';

const DespesaRouter = Router();

DespesaRouter.get('/', despesaController.all);
DespesaRouter.post('/', despesaController.create);
DespesaRouter.put('/:id', despesaController.update);
DespesaRouter.delete('/:id', despesaController.delete);

export default DespesaRouter;
