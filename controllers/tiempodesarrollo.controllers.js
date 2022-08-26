import { Payload } from '../heldepers/payload.js';
import { TiempodesarrolloQueries } from '../queries/tiempodesarrollo.queries.js';


class TiempodesarrolloController {

    static payload = new Payload();

    async create(req,res) {
        const body = req.body;
        const condition = body.condition;
        const query = await TiempodesarrolloQueries.store(body,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }


    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await TiempodesarrolloQueries.find(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async findid(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {id} = req.params;
        const query = await TiempodesarrolloQueries.findid(id,condition);
        console.log(query.data)
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async update(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {titulo, fecha_inicio, fecha_fin, descripcion} = req.body;
        const {id} = req.params;
        const query = await TiempodesarrolloQueries.update(id, titulo, fecha_inicio, fecha_fin, descripcion);
        const query2 = await TiempodesarrolloQueries.findid(id,condition);
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
        const query = await TiempodesarrolloQueries.delete(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

}



export const tiempodesarrolloController = new TiempodesarrolloController();