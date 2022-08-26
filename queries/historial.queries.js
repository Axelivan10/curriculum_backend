import { HistorialModel } from '../models/historial.model.js';

class historialQueries {

    async store(habilidades){
        try{
            const query = HistorialModel.create(habilidades);
            if(query){
                return {ok: true, data:query};
            }
        }catch (e){
            console.log('Error al ejecutar query' , e);
            return {ok: false, date:null}
        }
    }

    async findid(id) {
        try {
            const query = await HistorialModel.findByPk(id);
            if(query){
                return {ok: true, data: query};
            }else{
                return {ok: false, data: null};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async update(id, puesto, titulo, fecha_inicio, fecha_fin, descripcion) {
        try {
            const query = await HistorialModel.update({
                puesto: puesto,
                titulo: titulo,
                fecha_inicio:fecha_inicio,
                fecha_fin: fecha_fin,
                descripcion: descripcion

            }, {
                where:{
                    id : id
                }
            })
            if(query){
                return {ok: true, data: query};
            }else{
                return {ok: false, data: null};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }


    async delete(id) {
        try {
            const query = await HistorialModel.destroy({
                where: {
                  id: id
                }
              })
            if(query){
                return {ok: true, data: query};
            }else{
                return {ok: false, data: null};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async find(condition = {}) {
        try{
            const query = await HistorialModel.findAll({where:condition});
            if(query){
                return{ok: true, data: query};
            }
        } catch(e){
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async findOne(condition = {}) {
        try {
            const query = await HistorialModel.findOne({where:condition});
            if(query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

}


export const HistorialQueries = new historialQueries();