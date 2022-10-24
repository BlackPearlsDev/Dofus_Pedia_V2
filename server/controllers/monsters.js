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

// on ajout un monstre
export const addMonster = async (req, res, next) => {
    try {
        const {valueName, valueEcosystem, valueRace, valueLevel, valueHealth, valuePA, valuePM, valueExperience, valueInitiative, valueStrength, valueIntelligence, valueChance, valueAgility, valueDodgePA, valueDodgePM, valueResiNeutral, valueResiEarth, valueResiFire, valueResiWater, valueResiWind, valueSpells, valueDrops, valueZones, image_name} = req.body;

        const datas = {
            monster_name: valueName,
            ecosystem_id: valueEcosystem,
            race_id: valueRace,
            level: valueLevel,
            health: valueHealth,
            action_point: valuePA,
            movement_point: valuePM,
            experience: valueExperience,
            init: valueInitiative,
            earth: valueStrength,
            fire: valueIntelligence,
            water: valueChance,
            wind: valueAgility,
            dodge_pa: valueDodgePA,
            dodge_pm: valueDodgePM,
            resi_neutral: valueResiNeutral,
            resi_earth: valueResiEarth,
            resi_fire: valueResiFire,
            resi_water: valueResiWater,
            resi_wind: valueResiWind,
            spells: valueSpells,
            drops: valueDrops,
            zones: valueZones,
            image_name: image_name,
        }
        console.log('datas', datas);

        const query = `INSERT INTO monster (monster_name, ecosystem_id, race_id, level, health, action_point, movement_point, experience, init, earth, fire, water, wind, dodge_pa, dodge_pm, resi_neutral, resi_earth, resi_fire, resi_water, resi_wind, spells, zones, drops, image_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result = await Query.save(query, datas);

        res.status(200).json({
            msg: "New monster added (+)",
            result: result,
        });
        return;
    } catch (error) {
        return next(error);
    }
}

// on ajoute une image au back
export const addImg = async (req, res) => {
    try {
        await req.files.image.mv(`public/images/monsters/${req.files.image.name}`);
        res.status(200).json({
            msg: `Image added to the back' [ ${req.files.image.name} ] !`,
            url: req.files.image.name,
        })
    } catch (error) {        
        res.status(500).json({ msg: "photo can't be recover", error: error  });
    }    
}

// on supprime un monstre
export const deleteMonster = async (req, res, next) => {
    try {
        // const {id} = req.body;
        const id = req.params.id;
        const query = `DELETE FROM monster WHERE id = ?`;
        const result = await Query.getDataByValue(query, id);

        res.status(200).json({
            msg: "Monster deleted (-)",
            result: result,
        });
        return;
    } catch (error) {
        return next(error);
    }
}