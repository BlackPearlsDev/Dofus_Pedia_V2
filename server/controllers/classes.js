import Query from '../models/Query.js';

// on récupere toute les classes
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM classes";
        const classes = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL classes are get",
            result: classes,
        });
        return;
    } catch (error) {
        return next(error);
    }
}