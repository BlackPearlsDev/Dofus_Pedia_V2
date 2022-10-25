import Query from '../models/Query.js';

// on récupere toute les races
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM race";
        const races = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL races are get",
            result: races,
        });
        return;
    } catch (error) {
        return next(error);
    }
}