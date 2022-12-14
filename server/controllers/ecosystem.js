import Query from '../models/Query.js';

// on récupere tout les ecosystèmes
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM ecosystem";
        const ecosystem = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL ecosystem are get",
            result: ecosystem,
        });
        return;
    } catch (error) {
        return next(error);
    }
}