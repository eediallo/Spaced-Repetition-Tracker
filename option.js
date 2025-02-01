function createOption(user) {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    return option;
}

export default createOption;
