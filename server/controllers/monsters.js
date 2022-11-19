import Query from '../models/Query.js';

// on récupere tout les monstres
export const getAll = async (req, res, next) => {
    try {
        // const query = "SELECT * FROM monster";
        const query = "SELECT monster.*, race_name, spell_name FROM monster JOIN race ON race.id = monster.race_id JOIN spells ON spells.id = monster.spells_id";
        const monster = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "ALL monsters are get",
            result: monster,
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
            spells_id: valueSpells,
            drops: valueDrops,
            zones: valueZones,
            image_name: image_name,
        }

        const query = `INSERT INTO monster (monster_name, ecosystem_id, race_id, level, health, action_point, movement_point, experience, init, earth, fire, water, wind, dodge_pa, dodge_pm, resi_neutral, resi_earth, resi_fire, resi_water, resi_wind, spells_id, drops, zones, image_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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

export const getSpellByName = async (req, res, next) => {
    try {
        const query = `SELECT monster_name, spell_name FROM monster JOIN spells ON spells.id = monster.spells_id`;
        const result = await Query.getAllDatas(query);

        res.status(200).json({
            msg: "Spell by name get !",
            result: result,
        });
        return;
    } catch (error) {
        return next(error);
    }
}