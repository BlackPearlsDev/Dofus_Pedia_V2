import Query from '../models/Query.js';

// on récupere toute les races
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM race";
        const classes = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL race are get",
            result: classes,
        });
        return;
    } catch (error) {
        return next(error);
    }
}