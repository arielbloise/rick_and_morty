const express = require ('express')
const server = express();
const router = require ('./routes/index')
const morgan = require ('morgan')




server.use(express.json());
server.use(morgan('dev'));


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });


server.use('/rickandmorty' , router)




module.exports = server;

















// SERVIDOR CON HTTP
// const http = require ('http')
// // const characters = require('./utils/data')
// const { getCharById } = require ('./controllers/getCharById')

// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split('/').at(-1)

//         getCharById(res, Number(id))

//     }



// }).listen(3001, 'localhost')
