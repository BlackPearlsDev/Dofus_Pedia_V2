export const validate = (inputs) => {
    if (window.location.pathname === "/login") {
        const inputsSanitized = {
            pseudo : inputs.pseudo.trim(),
            password : inputs.password.trim(),
        }
        return inputsSanitized;
    }

    if (window.location.pathname === "/register") {
        if (inputs.email.trim().length < 3 || inputs.password.trim().length < 3) {
            return "3 caractères minimum";
        } else return true;
    }

    if (window.location.pathname === "/admin/manageMonsters") {
        const inputsSanitized = {
            valueName : inputs.valueName.trim(),
            // valueEcosystem : inputs.valueEcosystem.trim(),
            // valueRace : inputs.valueRace.trim(),
            // valueLevel : inputs.valueLevel.trim(),
            // valueHealth : inputs.valueHealth.trim(),
            // valuePA : inputs.valuePA.trim(),
            // valuePM : inputs.valuePM.trim(),
            // valueExperience : inputs.valueExperience.trim(),
            // valueInitiative : inputs.valueInitiative.trim(),
            // valueStrength : inputs.valueStrength.trim(),
            // valueIntelligence : inputs.valueIntelligence.trim(),
            // valueChance : inputs.valueChance.trim(),
            // valueAgility : inputs.valueAgility.trim(),
            // valueDodgePA : inputs.valueDodgePA.trim(),
            // valueDodgePM : inputs.valueDodgePM.trim(),
            // valueResiNeutral : inputs.valueResiNeutral.trim(),
            // valueResiEarth : inputs.valueResiEarth.trim(),
            // valueResiFire : inputs.valueResiFire.trim(),
            // valueResiWater : inputs.valueResiWater.trim(),
            // valueResiWind : inputs.valueResiWind.trim(),
            valueSpells : inputs.valueSpells.trim(),
            valueDrops : inputs.valueDrops.trim(),
            valueZones : inputs.valueZones.trim(),
        }
        return inputsSanitized;
    }
};
