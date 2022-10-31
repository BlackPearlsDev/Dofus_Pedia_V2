import Query from '../models/Query.js';

// on récupere toute les catégories
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM post_category";
        const ecosystem = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL categories are get",
            result: ecosystem,
        });
        return;
    } catch (error) {
        return next(error);
    }
}

// on créer une catégorie
export const create = async (req, res, next) => {
    try {
        const {categoryName} = req.body;
        const query = "INSERT INTO post_category (category_name) VALUES (?)";
        const result = await Query.save(query, [categoryName]);

        res.status(200).json({
            msg: "Category created (+)",
            result: result,
        });
        return;
    } catch (error) {
        return next(error);
    }
}