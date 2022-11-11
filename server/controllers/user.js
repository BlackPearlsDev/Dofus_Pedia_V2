import { v4 as uuidv4 } from 'uuid';
import { hash, compare } from 'bcrypt';
import { saltRounds } from '../config/index.js';
import jwt from 'jsonwebtoken';
import Query from '../models/Query.js';
const { TOKEN_SECRET } = process.env;

// on récupere tout les utilisateurs
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM user";
        const users = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL users are get",
            result: users,
        });
        return;
    } catch (error) {
        return next(error);
    }
}

// on récupere un utilisateur | TODO
export const getOne = async (req, res, next) => {
    try {
        const query = "SELECT * FROM user WHERE uuid = ?";
        const user = await Query.getDataByValue(query, req.params.uuid);

        res.status(200).json({
            msg: "User found !",
            result: user[0],
        });
        return;
    } catch (error) {
        return next(error);
    }
}

// on créer un utilisateur
export const register = async (req, res, next) => {
    try {
        const {pseudo, email, password} = req.body;
        const datas = {
            pseudo: pseudo,
            password: await hash(password, saltRounds),
            email: email,
            uuid: uuidv4(),
        }

        const query1 = "SELECT * FROM user WHERE username = ?";
        const user = await Query.getDataByValue(query1, req.body.pseudo)
        if(user.length){
            res.status(409).json({
                msg: 'User already exist !',
            });
            return;
        }
        const query2 = "INSERT INTO user (username, password, email, uuid, role_id, last_connection) VALUES (?, ?, ?, ?, 1, NOW())";
        await Query.save(query2, datas);
        res.status(201).json({
            msg: "User created (+) !",
        })
        
    } catch (error) {
        return next(error);
    }
}

// on se connecte | TODO
export const login = async (req, res, next) => {
    try {
        const {pseudo, password} = req.body;
        const query1 = "SELECT * FROM user WHERE username = ?";
        const [user] = await Query.getDataByValue(query1, pseudo);
        if(!user || (user.username !== pseudo)){
            res.status(404).json({
                msg: `User does not exist !`,
            });
            return;
        } 
        const isSame = await compare(password, user.password);   
        if(isSame){
            const TOKEN = jwt.sign({uuid: user.uuid}, TOKEN_SECRET );
            res.status(200).json({
                msg: "All infos are correct !",
                token: TOKEN,
                uuid: user.uuid,
            });
            return;
        } else {
            res.status(401).json({msg: "bad password"});
            return;            
        }
        
    } catch (error) {        
        return next(error);
    }
}

// on met à jour un utilisateur | TODO
export const update = async (req, res, next) => {
    try {
        const query = "SELECT * FROM user WHERE uuid = ?";        
        const [user] = await Query.getDataByValue(query, req.params.uuid);
        const datas = {
            alias: !req.body.alias ? user.alias : req.body.alias,
            firstname: !req.body.firstname ? user.firstname : req.body.firstname,
            lastname: !req.body.lastname ? user.lastname : req.body.lastname,
            address: !req.body.address ? user.address : req.body.address,
            zip: !req.body.zip ? user.zip : req.body.zip,
            city: !req.body.city ? user.city : req.body.city,
            phone: !req.body.phone ? user.phone : req.body.phone,
            uuid: user.uuid,
        }
        const query2 = "UPDATE user SET alias = ?, firstname = ?, lastname = ?, address = ?, zip = ?, city = ?, phone = ? WHERE uuid = ?";
        await Query.save(query2, datas);
        res.status(200).json({
            msg: "User updated (+)",
        });
        return;
    } catch (error) {
        return next(error)
    }
}

// on supprime un utilisateur
export const remove = async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const query = "DELETE FROM user WHERE uuid = ?";
        await Query.remove(query, uuid);
        res.status(200).json({
            msg: "user deleted",
        });
        return;
    } catch (error) {
        return next(error)
    }
}