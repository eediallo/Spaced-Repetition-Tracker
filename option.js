function createOption(user) {
    const option = document.createElement("option");
    option.value = user.id;
    option.textContent = user.name;
    return option;
}
