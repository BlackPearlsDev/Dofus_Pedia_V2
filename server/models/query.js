import POOL from '../database/db.js';

class Query {

    static async save(query, data){
        const [result] = await POOL.execute(query, [...Object.values(data)]);
        return result; 
    }

    static async getDataByValue(query, value){
        const [result] = await POOL.execute(query, [value]);
        return result;
    }

    static async getAllDatas(query){
        const [result] = await POOL.execute(query);
        return result;
    }

    static async remove(query, id){
        const [result] = await POOL.execute(query, [id]);
        return result;
    }

}

export default Query;