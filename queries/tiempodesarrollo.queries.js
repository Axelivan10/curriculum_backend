import { TiempodesarrolloModel } from '../models/tiempodesarrollo.model.js';

class tiempodesarrolloQueries {

    async store(tiempodesarrollo){
        try{
            const query = TiempodesarrolloModel.create(tiempodesarrollo);
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
            const query = await TiempodesarrolloModel.findByPk(id);
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

    async update(id, titulo, fecha_inicio, fecha_fin, descripcion ) {
        try {
            const query = await TiempodesarrolloModel.update({
                titulo: titulo,
                fecha_inicio: fecha_inicio,
                fecha_fin:fecha_fin,
                descripcion:descripcion
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
            const query = await TiempodesarrolloModel.destroy({
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
            const query = await TiempodesarrolloModel.findAll({where:condition});
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
            const query = await TiempodesarrolloModel.findOne({where:condition});
            if(query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

}


export const TiempodesarrolloQueries = new tiempodesarrolloQueries();