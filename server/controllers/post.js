import Query from '../models/Query.js';

// on récupere tout les posts
export const getAll = async (req, res, next) => {
    try {
        const query = "SELECT * FROM post ORDER BY id DESC";
        const posts = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL posts are get",
            result: posts,
        });
        return;
    } catch (error) {
        return next(error);
    }
}

// on récupere un post par son id
export const getOneById = async (req, res, next) => {
    try {
        const query = "SELECT * FROM post WHERE id = ?";
        const post = await Query.getDataByValue(query, req.params.id);

        res.status(200).json({
            msg: "One post is get",
            result: post,
        });
        return;
    } catch (error) {
        return next(error);
    }
}

// on crée un post
export const create = async (req, res, next) => {
    try {
        const query = "INSERT INTO post (title, content, creation_time, author, category) VALUES (?, ?, NOW(), ?, ?)";
        const post = await Query.save(query, [req.body.title, req.body.content, req.body.author, req.body.category]);

        res.status(200).json({
            msg: "One post is create",
            result: post,
        });
        return;
    } catch (error) {
        return next(error);
    }
}

// on supprime un post
export const remove = async (req, res, next) => {
    try {
        const query = "DELETE FROM post WHERE id = ?";
        const post = await Query.remove(query, req.params.id);

        res.status(200).json({
            msg: "One post is delete",
            result: post,
        });
        return;
    } catch (error) {
        return next(error);
    }
}