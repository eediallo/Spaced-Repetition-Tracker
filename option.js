export function createOption(user) {
    const option = document.createElement("option");
    option.value = user.id; // Changed user.name --> user.id. We handle with id, not Name. We should add id to value.
    option.textContent = user.name;
    return option;
}

