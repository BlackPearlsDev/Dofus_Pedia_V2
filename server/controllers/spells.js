import Query from '../models/Query.js';

// on récupere toute les races
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM spells";
        const spells = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL spells are get",
            result: spells,
        });
        return;
    } catch (error) {
        return next(error);
    }
}