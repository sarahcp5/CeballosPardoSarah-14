// import dotenv from 'dotenv';
// import __dirname from '../src/utils.js'

// const mode = process.argv.slice(2)[0];

// dotenv.config({
//     path: mode === "PROD"?'__dirname/../.env.production' : '__dirname/../.env.development'
// });

// export default {
//     app:{
//         MODE:process.env.MODE || 'PROD',
//         PORT:process.env.PORT || 8080,
//         DEBUG:process.env.DEBUG || false,
//         MONGO_URL:process.env.MONGO_URL|| 'NONE'
//     }
// }


import dotenv from 'dotenv';
import minimist from "minimist";

const {
    MODE,
    PORT,
    _
} = minimist(process.argv.slice(2),
    {
        alias: { m: "MODE", p: "PORT" },
        default: { m:'PROD', p: 8080 }
    }
)

dotenv.config({
    path: MODE === "PROD" ? './.env.production' : './.env.development'
});

const information = {
    // [-] Argumentos de entrada  
    args: process.argv.slice(2),
    // [-] Path de ejecución
    execPath: process.cwd(),
    // [-] Nombre de la plataforma (sistema operativo)      
    plataforma: process.platform,
    // [-] Process id
    processID: process.pid,
    // [-] Versión de node.js      
    nodeVersion: process.version,
    // [-] Carpeta del proyecto
    carpeta: process.argv[1],
    // [-] Memoria total reservada (rss)
    memoria: ` ${Math.round( JSON.stringify(process.memoryUsage.rss())/ 1024 / 1024 * 100) / 100} MB`
}

export default {
    // init:{
    //     MODE: MODE,
    //     PORT: PORT,
    // },
    app:{
        MODE: process.env.MODE || 'DEV',
        PORT: process.env.PORT || 8080,
        DEBUG: process.env.DEBUG || false
    },
    mongo:{
        MONGO_URL: process.env.MONGO_URL,
        MONOG_USER: process.env.MONGO_USER
    },
    information
}