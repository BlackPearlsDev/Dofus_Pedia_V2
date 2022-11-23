import jwt from 'jsonwebtoken';

const { TOKEN_SECRET } = process.env;

export const auth = (req, res, next) => {
    const TOKEN = req.headers['x-access-token'];
    if(TOKEN === undefined || TOKEN === "null") {
        res.status(404).json({msg: "Token Not Found"});
        return;
    }else {
        jwt.verify(TOKEN, TOKEN_SECRET, (err, decoded) => {
            if(err) {
                res.status(401).json({status: 401, msg: "Token Invalid"});
                return;
            } else {
                // TODO: faire pareil côté front, décoder le token et recuperer l'uuid
                req.params.uuid = decoded.uuid;
                next();
            }
        });
    }
}