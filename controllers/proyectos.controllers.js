import { Payload } from '../heldepers/payload.js';
import { ProyectosQueries } from '../queries/proyectos.queries.js';


class ProyectosController {

    static payload = new Payload();

    async create(req,res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ProyectosQueries.store(body,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }


    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ProyectosQueries.find(condition);
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
        const query = await ProyectosQueries.findid(id,condition);
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
        const {titulo, fecha_inicio, fecha_fin, descripcion} = req.body;
        const {id} = req.params;
        const query = await ProyectosQueries.update(id, titulo, fecha_inicio, fecha_fin, descripcion);
        const query2 = await ProyectosQueries.findid(id,condition);
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
        const query = await ProyectosQueries.delete(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

}



export const proyectosController = new ProyectosController();