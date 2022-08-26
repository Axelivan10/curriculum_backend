import { FooterModel } from '../models/footer.model.js';

class footerQueries {

    async store(habilidades){
        try{
            const query = FooterModel.create(habilidades);
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
            const query = await FooterModel.findByPk(id);
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

    async update(id, nombre, url_imagen, url_link ) {
        try {
            const query = await FooterModel.update({
                nombre: nombre,
                url_imagen: url_imagen,
                url_link:url_link
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
            const query = await FooterModel.destroy({
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
            const query = await FooterModel.findAll({where:condition});
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
            const query = await FooterModel.findOne({where:condition});
            if(query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

}


export const FooterQueries = new footerQueries();