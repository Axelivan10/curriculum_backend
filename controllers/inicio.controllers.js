import { Payload } from '../heldepers/payload.js';
import { InicioQueries } from '../queries/inicio.queries.js';


class InicioController {

    static payload = new Payload();

    async create(req,res) {
        const body = req.body;
        const condition = body.condition;
        const query = await InicioQueries.store(body,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }


    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await InicioQueries.find(condition);
        if(query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async findid(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {id} = req.params;
        const query = await InicioQueries.findid(id,condition);
        console.log(query.data)
        if(query.ok){
            return res.status(200).json(query.data);
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async update(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {nombre, puesto, url_imagen, descripcion} = req.body;
        const {id} = req.params;
        const query = await InicioQueries.update(id, nombre, puesto, url_imagen, descripcion);
        const query2 = await InicioQueries.findid(id,condition);
        if(query.ok){
            return res.status(200).json({query2});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }
    

    async delete(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {id} = req.params;
        const query = await InicioQueries.delete(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }
}



export const inicioController = new InicioController();