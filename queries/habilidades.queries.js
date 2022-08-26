import { HabilidadesModel } from '../models/habilidades.model.js';

class habilidadesQueries {

    async store(habilidades){
        try{
            const query = HabilidadesModel.create(habilidades);
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
            const query = await HabilidadesModel.findByPk(id);
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

    async update(id, titulo, procentaje, url_imagen ) {
        try {
            const query = await HabilidadesModel.update({
                titulo: titulo,
                procentaje: procentaje,
                url_imagen:url_imagen
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
            const query = await HabilidadesModel.destroy({
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
            const query = await HabilidadesModel.findAll({where:condition});
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
            const query = await HabilidadesModel.findOne({where:condition});
            if(query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }


}


export const HabilidadesQueries = new habilidadesQueries();