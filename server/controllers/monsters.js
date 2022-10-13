import Query from '../models/Query.js';

// on récupere tout les monstres
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM monster";
        const classes = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL monsters are get",
            result: classes,
        });
        return;
    } catch (error) {
        return next(error);
    }
}