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

    if (window.location.pathname === "/admin/addCategories") {
        const inputsSanitized = {
            category_name : inputs.category_name.trim(),
        }
        return inputsSanitized;
    }

    if (window.location.pathname === "/admin/addProducts") {
        const inputsSanitized = {
            title : inputs.title.trim(),
            description : inputs.description.trim(),
            image_name : inputs.image_name,
            quantityInStock : inputs.quantityInStock.trim(),
            price : inputs.price.trim(),
            category_id : inputs.category_id.trim(),
        }
        return inputsSanitized;
    }
};
