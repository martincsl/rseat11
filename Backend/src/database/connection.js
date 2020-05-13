const knex=require('knex');
const configuration=require('c:/users/martin/documents/omnistack11/backend/knexfile');
const connection=knex(configuration.development);

module.exports=connection;