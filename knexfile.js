 const env = require('dotenv').load()

 // require('dotenv').config()

 module.exports = {

 development: {
     client: 'pg',
     connection: "postgres://localhost/dental",
   },

 production: {
     client: 'pg',
     connection: process.env.DATABASE_URL + '?ssl=true',
   }
 };
