const connection = require('../database/connection');


module.exports={

    async index(request, response){
        const register = await connection('todos').select('*');

        return response.json(register);
    },

    async create(request, response){

        const {description} = request.body;

        await connection('todos').insert({
            description,
        })

        return response.send("Todo successfully registered!")
    },

    async delete(request,response){

        const descriptionDelete = await connection('todos').select('*')
        .where({
            id: request.params.id
        })
        .del();
        
        return response.send("description successfully delete!")
    },

    async updateRegister(request, response){
        const {description} = request.body;

        await connection('todos')
        .where({
            id: request.params.id
        })
        .update({
            description: description
        })

        return response.send("Todo successfully registered!")
    }

}