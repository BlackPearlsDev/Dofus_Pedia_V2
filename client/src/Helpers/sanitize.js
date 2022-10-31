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
            valueSpells : inputs.valueSpells.trim(),
            valueDrops : inputs.valueDrops.trim(),
            valueZones : inputs.valueZones.trim(),
        }
        return inputsSanitized;
    }

    if (window.location.pathname === "/admin/createPosts") {
        const inputsSanitized = {
            title : inputs.title.trim(),
            content : inputs.content.trim(),
            category : inputs.category.trim(),
            author : inputs.author.trim(),
        }
        return inputsSanitized;
    }

    if (window.location.pathname === "/admin/createCategories") {
        const inputsSanitized = {
            categoryName : inputs.categoryName.trim(),
        }
        return inputsSanitized;
    }
};
