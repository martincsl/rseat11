const connection=require('../database/connection');
//console.log("Entrou em sessions");
module.exports= {
    async create (request, response) {
        
        const { id }=request.body;
        const ong = await connection ('ongs')
            .where('id',id)
            .select('name')
            .first();
        if (!ong) {
           return response.status(400).json({error: 'Ong nao existe'});
        }    
        return response.json(ong);
    }
};
