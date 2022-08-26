import express from "express";
import { userController } from '../controllers/user.controllers.js'
import { inicioController } from '../controllers/inicio.controllers.js'
import { habilidadesController } from '../controllers/habilidades.controllers.js'
import { historialController } from '../controllers/historial.controllers.js'
import { proyectosController } from '../controllers/proyectos.controllers.js'
import { tiempodesarrolloController } from '../controllers/tiempodesarrollo.controllers.js'
import { contactoController } from '../controllers/contacto.controllers.js'
import { footerController } from '../controllers/footer.controllers.js'
import { validateToken } from "../middlewares/accessToken.middleware.js";

export class Routes {
    /**
     * @param app
     */
    initRoutes(app = express.application) {
        app.get('/', (req, res) => {
            res.send('hola mundo');
        });

/*USER ROUTES*/

        app.post('/data', userController.processData);
        app.post('/test', userController.ejecutartest);

        /* CREAR - LISTAR - MOSTRAR1 - ACTUALIZAR - BORRAR*/

        app.route('/user', userController.create).post([validateToken.validateJWT], userController.create);
        app.route('/user', userController.find).get([validateToken.validateJWT], userController.find);
        app.route('/user/:id', userController.findid).get([validateToken.validateJWT], userController.findid);
        app.route('/user/:id', userController.update).put([validateToken.validateJWT], userController.update);
        app.route('/user/:id', userController.delete).delete([validateToken.validateJWT], userController.delete);
        
        app.post('/login', userController.login);

        app.route('/api/telegram').post(userController.sendTelegramMessage);


/*INICIO ROUTES*/

        app.route('/inicio', inicioController.create).post([validateToken.validateJWT], inicioController.create);
        //app.route('/inicio', inicioController.find).get([validateToken.validateJWT], inicioController.find);
        app.route('/inicio/:id', inicioController.findid).get([validateToken.validateJWT], inicioController.findid);
        app.route('/inicio/:id', inicioController.update).put([validateToken.validateJWT], inicioController.update);
        app.route('/inicio/:id', inicioController.delete).delete([validateToken.validateJWT], inicioController.delete);

        app.get('/inicio', inicioController.find);

// /*HABILIDADES ROUTES*/

         app.route('/habilidades', habilidadesController.create).post([validateToken.validateJWT], habilidadesController.create);
         //app.route('/habilidades/', habilidadesController.find).get([validateToken.validateJWT], habilidadesController.find);
         app.route('/habilidades/:id', habilidadesController.findid).get([validateToken.validateJWT], habilidadesController.findid);
         app.route('/habilidades/:id', habilidadesController.update).put([validateToken.validateJWT], habilidadesController.update);
         app.route('/habilidades/:id', habilidadesController.delete).delete([validateToken.validateJWT], habilidadesController.delete);

         app.get('/habilidades', habilidadesController.find);
// /*HISTORIAL ROUTES*/

         app.route('/historial', historialController.create).post([validateToken.validateJWT], historialController.create);
         //app.route('/historial', historialController.find).get([validateToken.validateJWT], historialController.find);
         app.route('/historial/:id', historialController.findid).get([validateToken.validateJWT], historialController.findid);
         app.route('/historial/:id', historialController.update).put([validateToken.validateJWT], historialController.update);
         app.route('/historial/:id', historialController.delete).delete([validateToken.validateJWT], historialController.delete);

         app.get('/historial', historialController.find);
// /*PROYECTOS ROUTES*/

         app.route('/proyectos', proyectosController.create).post([validateToken.validateJWT], proyectosController.create);
         //app.route('/proyectos', proyectosController.find).get([validateToken.validateJWT], proyectosController.find);
         app.route('/proyectos/:id', proyectosController.findid).get([validateToken.validateJWT], proyectosController.findid);
         app.route('/proyectos/:id', proyectosController.update).put([validateToken.validateJWT], proyectosController.update);
         app.route('/proyectos/:id', proyectosController.delete).delete([validateToken.validateJWT], proyectosController.delete);


         app.get('/proyectos', proyectosController.find);
// /*TIEMPO DE DESARROLLO ROUTES*/

         app.route('/tiempodesarrollo', tiempodesarrolloController.create).post([validateToken.validateJWT], tiempodesarrolloController.create);
         //app.route('/tiempodesarrollo', tiempodesarrolloController.find).get([validateToken.validateJWT], tiempodesarrolloController.find);
         app.route('/tiempodesarrollo/:id', tiempodesarrolloController.findid).get([validateToken.validateJWT], tiempodesarrolloController.findid);
         app.route('/tiempodesarrollo/:id', tiempodesarrolloController.update).put([validateToken.validateJWT], tiempodesarrolloController.update);
         app.route('/tiempodesarrollo/:id', tiempodesarrolloController.delete).delete([validateToken.validateJWT], tiempodesarrolloController.delete);

         app.get('/tiempodesarrollo', tiempodesarrolloController.find);
// /*CONTACTO ROUTES*/

         app.route('/contacto', contactoController.create).post([validateToken.validateJWT], contactoController.create);
         //app.route('/contacto', contactoController.find).get([validateToken.validateJWT], contactoController.find);
         app.route('/contacto/:id', contactoController.findid).get([validateToken.validateJWT], contactoController.findid);
         app.route('/contacto/:id', contactoController.update).put([validateToken.validateJWT], contactoController.update);
         app.route('/contacto/:id', contactoController.delete).delete([validateToken.validateJWT], contactoController.delete);

         app.get('/contacto', contactoController.find);

// /*FOOTER ROUTES*/

         app.route('/footer', footerController.create).post([validateToken.validateJWT], footerController.create);
         app.route('/footer', footerController.find).get([validateToken.validateJWT], footerController.find);
         app.route('/footer/:id', footerController.findid).get([validateToken.validateJWT], footerController.findid);
         app.route('/footer/:id', footerController.update).put([validateToken.validateJWT], footerController.update);
         app.route('/footer/:id', footerController.delete).delete([validateToken.validateJWT], footerController.delete);
        
    }
}