import {pool} from '../connectdb.js'

export const ping = async (req, res) =>{
    res.json({
        mensaje: 'pong'
    });
}