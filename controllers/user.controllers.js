import { Payload } from '../heldepers/payload.js';
import { UserQueries } from '../queries/user.queries.js';
import bcrypt from 'bcrypt';
import { Telegraf} from 'telegraf';


class UserController {

    static payload = new Payload();

    async sayHello(request, response) {
        return response.status(200).json({
            ok: true,
            message: 'Hello'
        });
    }

    async processData(request, response) {
        const body = request.body;
        console.log('data from front', body);
        return response.status(403).json({
            ok: true,
            message: 'data received'
        });
    }

    async ejecutartest (request, response){
        return response.status(200).json({
            ok:true,
            message:'Hello'
        });
    }

    async create(req,res) {
        //const {password} = req.body;
        const body = req.body;
        //console.log(body)
        const condition = body.condition;
        const query = await UserQueries.store(body,condition);

        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }


    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await UserQueries.find(condition);
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
        const query = await UserQueries.findid(id,condition);
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
        const {username,password,socket_id,online,avatar} = req.body;
        const {id} = req.params;
        const query = await UserQueries.update(id,username,password,socket_id,online,avatar,condition);
        const query2 = await UserQueries.findid(id,condition);
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
        const query = await UserQueries.delete(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }



    async login(req, res) {
        const body = req.body; 
        const query = await UserQueries.findone({
            username: body.username,
            password: body.password
        });
        try {
            const match = await bcrypt.compare(body.password, query.data.password );
            
            if(match){
                try {
                    const token = UserController.payload.createToken(query.data);
                    return res.status(200).send({
                        ok: true,
                        token: token,
                        data: query.data
                    });
                } catch (error) {
                    return res.status(400).json({
                        ok:false,
                        data:error,
                    })
                }
            }else{
                return res.status(400).json({
                    ok:false,
                    data:null,
                })
            }
        } catch (error) {
            return res.status(400).json({
                ok:false,
                data:error,
            })
        }
    }

    async sendTelegramMessage(req, res){
        console.log(req.body)
        console.log('sendTelegramMessage', req.body);
        console.log('bot token', process.env.BOT_TOKEN);
        const body = req.body;
        const message = body.message;

        try{
            const bot = new Telegraf(process.env.BOT_TOKEN);
            console.log('bot',bot)

            await bot.telegram.sendMessage(2046589024, message);
            return res.status(200).send({
                ok:true,
                data:null
            });
        }catch(e){
            console.log('error on telegram bot', e)
            return res.status(400).send({
                ok:false,
                data:null
            });
        }
    }



}
export const userController = new UserController();