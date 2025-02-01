const selectEl = document.querySelector("select");

function renderOptions(users) {
  const optionList = users.map(createOption);
  selectEl.append(...optionList);
}

window.onload = renderOptions;
